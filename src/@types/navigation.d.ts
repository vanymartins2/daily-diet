export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      new: undefined
      statistics: undefined
      edit: {
        id: string | number[]
      }
      details: {
        id: string | number[]
      }
      feedback: {
        onDiet: boolean
      }
    }
  }
}
