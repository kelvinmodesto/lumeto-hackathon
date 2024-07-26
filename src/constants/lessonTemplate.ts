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
          expirationDateUtc: '2023-12-07T05:00:00.000Z',
          name: 'Dopamine',
          concentration: '',
          concentrationUnits: '',
          doseUnits: '1',
          isPrescribed: true,
        },
        {
          dose: 1,
          expirationDateUtc: '2023-12-08T05:00:00.000Z',
          name: 'Morphine',
          concentration: '',
          concentrationUnits: '',
          doseUnits: '1',
          isPrescribed: '',
        },
        {
          dose: 1,
          expirationDateUtc: '2023-12-09T05:00:00.000Z',
          name: 'Epinephrine',
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
            name: 'Robin',
            sex: 'female',
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
          dateOfBirthUtc: '1994-04-01T00:00:00.000Z',
        },
      ],
    },
  ],
};

const PROMPT_INTRO = `${lessonTemplate}
  Using the object above as template , create a new JSON with the following details using realistic data: `;
export { PROMPT_INTRO };
