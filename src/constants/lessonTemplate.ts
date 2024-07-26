const lessonTemplate = {
  lesson: [
    {
      configurationSettingValuesSets: [
        {
          name: 'First measure',
          configurationSettingValues: [
            {
              key: 'Patient.Conscious',
              valueOrOptionValueKeyOrTag: 'True',
            },
            {
              key: 'Patient.Physiology.BloodPressure.DiastolicPressure',
              valueOrOptionValueKeyOrTag: '1',
            },
            {
              key: 'Patient.Physiology.BloodPressure.SystolicPressure',
              valueOrOptionValueKeyOrTag: '1',
            },
            {
              key: 'Patient.Physiology.BloodPressure.TrendTime',
              valueOrOptionValueKeyOrTag: '1',
            },
            {
              key: 'Patient.Physiology.CoreTemperature.TrendTime',
              valueOrOptionValueKeyOrTag: '1',
            },
            {
              key: 'Patient.Physiology.CoreTemperature.Value',
              valueOrOptionValueKeyOrTag: '1',
            },
            {
              key: 'Patient.Physiology.EtCO2.TrendTime',
              valueOrOptionValueKeyOrTag: '1',
            },
            {
              key: 'Patient.Physiology.EtCO2.Value',
              valueOrOptionValueKeyOrTag: '1',
            },
            {
              key: 'Patient.Physiology.Heart.bPea',
              valueOrOptionValueKeyOrTag: '',
            },
            {
              key: 'Patient.Physiology.Heart.HeartRate',
              valueOrOptionValueKeyOrTag: '1',
            },
            {
              key: 'Patient.Physiology.Heart.HeartRhythm',
              valueOrOptionValueKeyOrTag: 'PatientHeartRhythm_NormalSinus',
            },
            {
              key: 'Patient.Physiology.Heart.TrendTime',
              valueOrOptionValueKeyOrTag: '1',
            },
            {
              key: 'Patient.Physiology.RespirationRate.TrendTime',
              valueOrOptionValueKeyOrTag: '1',
            },
            {
              key: 'Patient.Physiology.RespirationRate.Value',
              valueOrOptionValueKeyOrTag: '1',
            },
            {
              key: 'Patient.Physiology.SpO2.TrendTime',
              valueOrOptionValueKeyOrTag: '1',
            },
            {
              key: 'Patient.Physiology.SpO2.Value',
              valueOrOptionValueKeyOrTag: '1',
            },
          ],
        },
      ],
      name: 'Ectopic Pregnancy',
      summary: '',
      author: 'Vineet Kumar',
      lessonMedications: [
        {
          expirationDateUtc: '',
          name: '',
          concentration: '',
          concentrationUnits: '',
          doseUnits: '1',
          isPrescribed: true,
        },
        {
          dose: 1,
          expirationDateUtc: '',
          name: '',
          concentration: '',
          concentrationUnits: '',
          doseUnits: '1',
          isPrescribed: '',
        },
        {
          dose: 1,
          expirationDateUtc: '',
          name: '',
          concentration: '',
          concentrationUnits: '',
          doseUnits: '1',
          isPrescribed: '',
        },
      ],
      objective: '',
      brief: '',
      messageBoardLearningObjectives: '',
      lessonPatients: [
        {
          patient: {
            name: '',
            sex: '',
            dateOfBirthUtc: '',
            heightInCm: '',
            weightInKg: 78,
            bloodType: '',
            ethnicity: '',
            historyPastMedical: '',
            historyPastSurgical: '',
            historyMedications: '',
            historyAllergies: '',
            historyFamilySocial: '',
          },
          patientPosition: '',
          bedInclinationInDegreesFromHorizontal: '',
          bedHeight: '',
          eyeOpennessLeft: '',
          eyeOpennessRight: '',
          dateOfBirthUtc: '',
        },
      ],
    },
  ],
};

const PROMPT_INTRO = `${JSON.stringify(lessonTemplate.lesson)}
Using this JSON as template , fill the JSON template with realistic data of this case: `;
export { PROMPT_INTRO };
