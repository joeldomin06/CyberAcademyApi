export const GetFeedback = (score: number) => {
    const positive_feedback = [
        "¡Gran trabajo! Has demostrado un excelente desempeño en esta evaluación.",
        "Tu esfuerzo ha dado sus frutos, y has alcanzado un nuevo nivel de habilidad.",
        "¡Sigue así! Estás progresando muy bien y cada vez estás más cerca de tus objetivos.",
        "Fantástico resultado. Tu dedicación y compromiso son inspiradores.",
        "¡Increíble! Has superado tus expectativas y alcanzado un nuevo nivel."
    ]

    const improvement_feedback = [
        "Buen intento. Con un poco más de práctica, puedes lograr resultados aún mejores.",
        "Has mostrado progreso, pero hay áreas en las que puedes mejorar. ¡No te rindas!",
        "Tu esfuerzo es evidente, pero considera revisar algunos conceptos para alcanzar un mejor desempeño.",
        "Estás en el camino correcto, pero te animo a enfocarte en las áreas que necesitan más atención.",
        "Has avanzado, pero aún hay espacio para mejorar. Con dedicación, ¡lo lograrás!"
    ]

    const motivational_feedback = [
        "Cada paso cuenta. Sigue trabajando duro y verás el éxito en tu futuro.",
        "Recuerda que el aprendizaje es un viaje, no un destino. ¡Sigue explorando y aprendiendo!",
        "Los desafíos son oportunidades para crecer. ¡No dudes en enfrentarlos!",
        "Confía en ti mismo y en tu capacidad para aprender y mejorar continuamente.",
        "Cada intento te acerca más a tus metas. ¡Sigue así!"
    ]
    if (score >= 0.7){
        const index = Math.floor(Math.random() * positive_feedback.length)
        return positive_feedback[index];
    }
    if(score >= 0.4 && score < 0.7){
        const index = Math.floor(Math.random() * improvement_feedback.length)
        return improvement_feedback[index];
    }
    const index = Math.floor(Math.random() * motivational_feedback.length)
    return motivational_feedback[index];
}

export const GetNewLevel = (level_student: number, score: number) => {
    const mx = (x:number) => 1/(x / 2 + 1)
    const mn = (x: number) => (1/(2*x/5 +5)) - 1/5
    const f = ( x: number,r: number) => r*(mx(x)-mn(x)) + mx(x)
    return level_student + f(level_student,score)
}