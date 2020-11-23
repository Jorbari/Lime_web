export const addDefaultQuestionToQuestions = (state)=>{
    let questions = [...state.questions, {...createMultiChoice()}]
    return {
        currentId: questions.length - 1,
        questions
    }
}

export const removeQuestion = (state)=>{
    let questions = [...state.questions]
    questions = questions.splice(state.currentId,1)
    return {
        currentId: newIdAfterRemove(),
        questions
    }
}

export const setQuestionFormat = (state, format)=>{
    let questions = [...state.questions]
    questions[state.currentId] = {...setFormat(format)}
    return questions
}

//CALC ID AFTER REMOVE
const newIdAfterRemove = (state)=>{
    const currentId = state.currentId
    const totalQuestionsLength = state.questions.length
    return currentId+1 === totalQuestionsLength? currentId-1: currentId+1
}

//TYPES OF QUESTION FORMAT
export const questionFormatTypes = {
    multichoice:'multichoice',
    checkbox:'checkbox',
    shortanswer:'shortanswer',
    dropdown:'dropdown',
    linearscale:'linearscale',
    paragraph:'paragraph',
}

const setFormat = (format)=>{
    switch(format){
        case `${questionFormatTypes.multichoice}`:
            return createMultiChoice()
        case `${questionFormatTypes.checkbox}`:
            return createCheckbox()
        case `${questionFormatTypes.dropdown}`:
            return createDropdown()
        case `${questionFormatTypes.shortanswer}`:
            return createShortAnswer()
        case `${questionFormatTypes.paragraph}`:
            return createParagraph()
        case `${questionFormatTypes.linearscale}`:
            return createLinearscale()
    }
}


//DEFAULT QUESTION DATA
const defaultData = {
    title:'',
    required: false,
    previewMode: false,
}

/**
 * FORM CREATION UTILITIES
 */

const createMultiChoice = ()=>{
    return {
        ...defaultData,
        format: `${questionFormatTypes.multichoice}`,
        shape:['Option 1'],
    }
}

const createCheckbox = ()=>{
    return {
        ...defaultData,
        format: `${questionFormatTypes.checkbox}`,
        shape:['Option 1'],
    }
}

const createShortAnswer = ()=>{
    return {
        ...defaultData,
        format: `${questionFormatTypes.shortanswer}`,
        shape: '',
    }
}

const createParagraph = ()=>{
    return {
        ...defaultData,
        format: `${questionFormatTypes.paragraph}`,
        shape: '',
    }
}

const createDropdown = ()=>{
    return {
        ...defaultData,
        format: `${questionFormatTypes.dropdown}`,
        shape:['Option 1'],
    }
}

const createLinearscale = ()=>{
    return {
        ...defaultData,
        format: `${questionFormatTypes.linearscale}`,
        shape:{
            range:[1,5],
            label:['','']
        },
    }
}