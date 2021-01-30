export const convertQuestions = (arr)=>{
    console.log(arr)
    return arr.map((question,index)=>{
        question.question_options = JSON.parse(question.question_options)
        let val = {
            required: question.isRequired,
            title: question.question_body,
            shape: question.question_options,
            format: question.format,
            previewMode: true,
            answer: question.response || []
        }
        if(index == arr.length -1){
            val.previewMode = false
        }
        return val
    })
}