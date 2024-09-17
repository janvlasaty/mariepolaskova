<template>
  <section id="contact-me" class="bg-shaded">
    <div class="container-lg py-5">
      <div class="row gx-5">
        <div class="col">
          <h1 class="line-below">{{ t(`contact-me.title`) }}</h1>
          <template v-for="(item, index) in tm('contact-me.content')" :key="index">
            <div>
              <h5>{{ item.title }}</h5>
              <p v-html="item.text"></p>
            </div>
          </template>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="line-below">{{ t(`contact-me.form.title`) }}</h5>
              <form>
                <div class="row g-3">
                  <div class="col-6 full-height">
                    <div class="form-control">
                      <h6 class="text-center">Listopad 2024</h6>
                      <div v-for="(week, indexWeek) in daysInMonth" :key="indexWeek" class="row g-0 mb-2">
                        <div v-for="(day, indexDay) in week" :key="indexDay" class="col text-center">
                          {{ day.day }}
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
                      class="form-control"
                      :placeholder="t(`contact-me.form.name`)"
                      :aria-label="t(`contact-me.form.name`)"
                    />
                  </div>
                  <div class="col-6">
                    <input
                      type="text"
                      class="form-control"
                      :placeholder="t(`contact-me.form.surname`)"
                      :aria-label="t(`contact-me.form.surname`)"
                    />
                  </div>
                  <div class="col-12">
                    <input
                      type="text"
                      class="form-control"
                      :placeholder="t(`contact-me.form.email`)"
                      :aria-label="t(`contact-me.form.email`)"
                    />
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btn btn-primary">Sign in</button>
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
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const daysInMonth = [
  [
    { day: 1, name: 'Pondělí' },
    { day: 2, name: 'Úterý' },
    { day: 3, name: 'Středa' },
    { day: 4, name: 'Čtvrtek' },
    { day: 5, name: 'Pátek' },
    { day: 6, name: 'Sobota' },
    { day: 7, name: 'Neděle' }
  ],
  [
    { day: 8, name: 'Pondělí' },
    { day: 9, name: 'Úterý' },
    { day: 10, name: 'Středa' },
    { day: 11, name: 'Čtvrtek' },
    { day: 12, name: 'Pátek' },
    { day: 13, name: 'Sobota' },
    { day: 14, name: 'Neděle' }
  ],
  [
    { day: 15, name: 'Pondělí' },
    { day: 16, name: 'Úterý' },
    { day: 17, name: 'Středa' },
    { day: 18, name: 'Čtvrtek' },
    { day: 19, name: 'Pátek' },
    { day: 20, name: 'Sobota' },
    { day: 21, name: 'Neděle' }
  ],
  [
    { day: 22, name: 'Pondělí' },
    { day: 23, name: 'Úterý' },
    { day: 24, name: 'Středa' },
    { day: 25, name: 'Čtvrtek' },
    { day: 26, name: 'Pátek' },
    { day: 27, name: 'Sobota' },
    { day: 28, name: 'Neděle' }
  ],
  [
    { day: 29, name: 'Pondělí' },
    { day: 30, name: 'Úterý' },
    { day: 31, name: 'Středa' },
    { day: 1, name: 'Čtvrtek' },
    { day: 2, name: 'Pátek' },
    { day: 3, name: 'Sobota' },
    { day: 4, name: 'Neděle' }
  ]
]
</script>

<style lang="scss" scoped>
//
</style>
