<template>
  <section id="contact-me" class="bg-shaded">
    <div class="container-lg py-5">
      <div class="row">
        <div class="col-12 col-lg-6">
          <h1 class="line-below">{{ t(`contact-me.title`) }}</h1>
          <template v-for="(item, index) in tm('contact-me.content')" :key="index">
            <div>
              <h5>{{ item.title }}</h5>
              <p v-html="item.text"></p>
            </div>
          </template>
        </div>
        <div class="col-12 col-lg-6">
          <div class="card">
            <div class="card-body p-4">
              <h5 class="line-below">{{ t(`contact-me.form.title`) }}</h5>
              <form>
                <div class="row g-3">
                  <div class="col-6 full-height">
                    <div class="form-control">
                      <h6 class="text-center mb-3">
                        <i class="bi bi-arrow-left-short"></i> {{ calendarView.monthYear }}
                        <i class="bi bi-arrow-right-short"></i>
                      </h6>
                      <div class="row g-0">
                        <div v-for="(day, indexDay) in tm(`calendar.dayShortNames`)" :key="indexDay" class="col text-center">
                          <span class="text-muted small">{{ day }}</span>
                        </div>
                      </div>
                      <hr />
                      <div v-for="(week, indexWeek) in daysInMonth" :key="indexWeek" class="row g-0 mb-2">
                        <div v-for="(day, indexDay) in week" :key="indexDay" class="col text-center">
                          <span :class="[{ 'text-muted': !day.isSelectedMonth }]">{{ day.dayOfMonth }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 full-height">
                    <div class="form-control">
                      <h6 class="text-center">24. 11. 2024</h6>
                    </div>
                  </div>
                  <div class="col-6">
                    <input
                      type="text"
                      name="given-name"
                      autocomplete="given-name"
                      class="form-control"
                      :placeholder="t(`contact-me.form.name`)"
                      :aria-label="t(`contact-me.form.name`)"
                    />
                  </div>
                  <div class="col-6">
                    <input
                      type="text"
                      name="family-name"
                      autocomplete="family-name"
                      class="form-control"
                      :placeholder="t(`contact-me.form.surname`)"
                      :aria-label="t(`contact-me.form.surname`)"
                    />
                  </div>
                  <div class="col-12">
                    <input
                      type="text"
                      name="email"
                      autocomplete="email"
                      class="form-control"
                      :placeholder="t(`contact-me.form.email`)"
                      :aria-label="t(`contact-me.form.email`)"
                    />
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btn btn-primary w-100 text-white">{{ t(`contact-me.form.submit`) }}</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const selectedDate = ref(new Date())
const calendarView = computed(() => {
  return {
    monthYear: selectedDate.value.toLocaleDateString('cs-CZ', { month: 'long', year: 'numeric' })
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
    shortName: date.toLocaleDateString('cs-CZ', { weekday: 'short' })
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
</script>

<style lang="scss" scoped>
//
</style>
