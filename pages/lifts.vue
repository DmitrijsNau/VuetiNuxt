<template>
  <div>
    <v-container fluid>
      <v-row row wrap>
        <v-col xs12 sm12 md6>
          <v-form @submit.prevent="onSubmit">
            <v-card class="card">
              <v-card-title>Create New Lift</v-card-title>
              <v-select
                label="Lift"
                :items="liftTypeList"
                variant="underlined"
                v-model="currentSubmission.lift"></v-select>
              <v-text-field
                label="Date (mm/dd/yy)"
                persistent-hint
                prepend-inner-icon="mdi-calendar-month"
                :rules="rules"
                v-model="currentSubmission.date"></v-text-field>
              <v-text-field
                label="Weight"
                persistent-hint
                prepend-inner-icon="mdi-dumbbell"
                :rules="rules"
                v-model="currentSubmission.weight"></v-text-field>
              <v-text-field
                label="Reps"
                persistent-hint
                :rules="rules"
                v-model="currentSubmission.Reps"></v-text-field>
              <v-text-field
                label="RPE"
                persistent-hint
                :rules="rules"
                v-model="currentSubmission.RPE"></v-text-field>
              <v-btn type="submit" block class="mt-2">Submit</v-btn>
            </v-card>
          </v-form>
        </v-col>
        <v-col xs12 sm12 md6>
          <v-card v-for="lift in liftData" class="card">
            <v-card-title>{{ lift.liftType }}</v-card-title>
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">Date</th>
                  <th class="text-left">Weight</th>
                  <th class="text-left">Reps</th>
                  <th class="text-left">RPE</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="submission in lift.data" :key="lift">
                  <td>{{ submission[0] }}</td>
                  <td>{{ submission[1] }}</td>
                  <td>{{ submission[2] }}</td>
                  <td>{{ submission[3] }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
definePageMeta({
  layout: "default",
});

export default {
  data() {
    return {
      liftData: [
        {
          liftType: "Bench",
          data: {
            0: ["05/13/23", 185, 9, 9.8],
            1: ["05/17/23", 190, 7, 9],
          },
          id: 2,
        },
        {
          liftType: "Deadlift",
          data: { 0: ["06/01/23", 335, 11, 10] },
          id: 1,
        },
        {
          liftType: "Overhead Press",
          data: { 0: [] },
          id: 1,
        },
        {
          liftType: "Incline BB",
          data: { 0: [] },
          id: 1,
        },
      ],
      rules: [
        (value) => {
          if (value) return true;
          return "Cannot leave blank";
        },
      ],
      liftTypeList: ["Bench", "Deadlift", "Overhead Press", "Incline BB"],
      currentSubmission: {
        lift: "",
        date: "",
        weight: 0,
        reps: 0,
        RPE: 0,
      },
    };
  },
  methods: {
    onSubmit() {
      for (let lift of this.liftData) {
        if (lift.liftType === this.currentSubmission.lift) {
          lift.data[lift.id] = [
            this.currentSubmission.date,
            this.currentSubmission.weight,
            this.currentSubmission.reps,
            this.currentSubmission.RPE,
          ];
          this.currentSubmission.lift = "";
          this.currentSubmission.date = "";
          this.currentSubmission.weight = "";
          this.currentSubmission.reps = "";
          this.currentSubmission.RPE = "";
        }
      }
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 70px;
  padding: 10px;
}
</style>
