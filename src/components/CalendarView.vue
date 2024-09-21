<template>
  <h3 class="line-below">{{ t(`calendar-view.title`) }}</h3>
  <form>
    <div class="row g-3">
      <div class="col-12 col-sm-6 full-height">
        <div class="form-control">
          <div class="row">
            <div class="col-2">
              <p v-if="calendarView.allowPreviousMonth" class="lead fw-bold">
                <i class="bi bi-arrow-left-circle-fill pointer-cursor" @click="previousMonth()"></i>
              </p>
            </div>
            <div class="col-8">
              <p class="lead fw-bold">{{ calendarView.monthYear }}</p>
            </div>
            <div class="col-2">
              <p v-if="calendarView.allowNextMonth" class="lead fw-bold">
                <i class="bi bi-arrow-right-circle-fill pointer-cursor" @click="nextMonth()"></i>
              </p>
            </div>
          </div>
          <div class="row g-0">
            <div v-for="(day, indexDay) in tm(`calendar.dayShortNames`)" :key="indexDay" class="col text-center">
              <span class="text-muted small">{{ day }}</span>
            </div>
          </div>
          <hr />
          <div v-for="(week, indexWeek) in daysInMonth" :key="indexWeek" class="row g-0 mb-0">
            <div
              v-for="(day, indexDay) in week"
              :key="indexDay"
              :class="['col', 'text-center', 'py-1', { 'day-available': day.isAvailable, 'day-selected': day.isSelected }]"
              @click="day.isAvailable ? selectDate(day.date) : null"
            >
              <span
                :class="[
                  {
                    'text-muted': !day.isSelectedMonth
                  }
                ]"
                >{{ day.dayOfMonth }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 full-height">
        <div class="form-control">
          <p class="lead text-center">Datum</p>
          <p class="lead text-center">{{ calendarView.dateFormatted }}</p>
          <hr />
          <div class="row g-3 p-2">
            <div
              v-for="(slot, indexSlot) in calendarView.availableSlots"
              :key="indexSlot"
              class="col-12 bg-white text-center fw-bold"
            >
              <span>{{ slot.hour }}:{{ slot.minute }} ({{ slot.duration + 'min' }})</span>
            </div>
          </div>
          <p v-if="calendarView.availableSlots.length === 0" class="text-center">
            <i>Žádné volné termíny</i>
          </p>
        </div>
      </div>
      <div class="col-6">
        <input
          type="text"
          name="given-name"
          autocomplete="given-name"
          class="form-control"
          :placeholder="t(`calendar-view.name`)"
          :aria-label="t(`calendar-view.name`)"
        />
      </div>
      <div class="col-6">
        <input
          type="text"
          name="family-name"
          autocomplete="family-name"
          class="form-control"
          :placeholder="t(`calendar-view.surname`)"
          :aria-label="t(`calendar-view.surname`)"
        />
      </div>
      <div class="col-12">
        <input
          type="text"
          name="email"
          autocomplete="email"
          class="form-control"
          :placeholder="t(`calendar-view.email`)"
          :aria-label="t(`calendar-view.email`)"
        />
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary w-100 text-white">{{ t(`calendar-view.submit`) }}</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const todayDate = new Date()
const selectedDate = ref(new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate(), 0, 0, 0, 0))

const availableSlots = [
  {
    date: selectedDate.value,
    slots: [
      {
        hour: '15',
        minute: '00',
        duration: '50'
      },
      {
        hour: '16',
        minute: '00',
        duration: '50'
      }
    ]
  },
  {
    date: new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() + 7, 0, 0, 0, 0),
    slots: [
      {
        hour: '13',
        minute: '30',
        duration: '50'
      },
      {
        hour: '16',
        minute: '00',
        duration: '50'
      }
    ]
  }
]

const calendarView = computed(() => {
  const availableDaySlots = availableSlots.find((daySlots) => daySlots.date.valueOf() === selectedDate.value.valueOf())

  return {
    allowPreviousMonth:
      selectedDate.value.getMonth() > todayDate.getMonth() || selectedDate.value.getFullYear() > todayDate.getFullYear(),
    allowNextMonth: true,
    dateFormatted: selectedDate.value.toLocaleDateString('cs-CZ'),
    monthYear: selectedDate.value.toLocaleDateString('cs-CZ', { month: 'long', year: 'numeric' }),
    availableSlots: availableDaySlots ? availableDaySlots.slots : [],
    availableDates: availableSlots.map((daySlots) => daySlots.date)
  }
})

const generateDayObject = (date = new Date()) => {
  return {
    date,
    day: date.getDay(),
    dayOfMonth: date.getDate(),
    isPreviousMonth: date.getMonth() !== selectedDate.value.getMonth() && date.valueOf() < selectedDate.value.valueOf(),
    isSelectedMonth: date.getMonth() === selectedDate.value.getMonth(),
    isNextMonth: date.getMonth() !== selectedDate.value.getMonth() && date.valueOf() > selectedDate.value.valueOf(),
    name: date.toLocaleDateString('cs-CZ', { weekday: 'long' }),
    shortName: date.toLocaleDateString('cs-CZ', { weekday: 'short' }),
    isAvailable: calendarView.value.availableDates.some((_date) => _date.valueOf() === date.valueOf()),
    isSelected: date.valueOf() === selectedDate.value.valueOf()
  }
}

function getMonthWeeks(now = new Date()) {
  const year = now.getFullYear()
  const month = now.getMonth()

  // Get first and last days of the month
  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)

  // Get day of week for first day (0 is Sunday, 6 is Saturday)
  let firstDayOfWeek = firstDayOfMonth.getDay()
  // Adjust so Monday is first (Monday = 1, Sunday = 0 becomes 7)

  firstDayOfWeek = firstDayOfWeek === 0 ? 7 : firstDayOfWeek

  // Get day of week for last day (again, Monday-first adjustment)
  let lastDayOfWeek = lastDayOfMonth.getDay()

  lastDayOfWeek = lastDayOfWeek === 0 ? 7 : lastDayOfWeek

  // Calculate the start date (Monday before or on the first day of month)
  const startDate = new Date(firstDayOfMonth)

  startDate.setDate(firstDayOfMonth.getDate() - (firstDayOfWeek - 1))

  // Calculate the end date (Sunday after or on the last day of month)
  const endDate = new Date(lastDayOfMonth)

  endDate.setDate(lastDayOfMonth.getDate() + (7 - lastDayOfWeek))

  const currentDate = new Date(startDate)
  const weeks = []

  // Generate weeks
  // eslint-disable-next-line no-unmodified-loop-condition
  while (currentDate <= endDate) {
    const week = []

    for (let i = 0; i < 7; i++) {
      week.push(new Date(currentDate)) // Add current date to week
      currentDate.setDate(currentDate.getDate() + 1) // Move to next day
    }
    weeks.push(week.map((date) => generateDayObject(date))) // Store only the day of month
  }

  return weeks
}

const daysInMonth = ref(getMonthWeeks())

const selectDate = (date) => {
  selectedDate.value = date
  daysInMonth.value = getMonthWeeks(date)
}
const previousMonth = () => {
  selectedDate.value = new Date(selectedDate.value.getFullYear(), selectedDate.value.getMonth() - 1, 1)
  daysInMonth.value = getMonthWeeks(selectedDate.value)
}
const nextMonth = () => {
  selectedDate.value = new Date(selectedDate.value.getFullYear(), selectedDate.value.getMonth() + 1, 1)
  daysInMonth.value = getMonthWeeks(selectedDate.value)
}
</script>

<style lang="scss" scoped>
.day-available {
  cursor: pointer;
  background-color: $white;
  color: $primary;
  font-weight: bold;
}
.day-selected {
  background-color: $primary;
  color: $white;
}
</style>
