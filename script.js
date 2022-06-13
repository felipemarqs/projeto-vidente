    const respostas = [
        "Certeza!",
        "Não tenho tanta certeza.",
        "Decididamente sim.",
        "Não conte com isso.",
        "Sem dúvidas!",
        "Pergunte novamente mais tarde.",
        "Sim, definitivamente!",
        "Minha resposta é não.",
        "Você pode contar com isso.",
        "Melhor não te dizer agora.",
        "A meu ver, sim.",
        "Minhas fontes dizem não.",
        "Provavelmente.",
        "Não é possível prever agora.",
        "Perspectiva boa.",
        "As perspectivas não são tão boas.",
        "Sim.",
        "Concentre-se e pergunte novamente.",
        "Sinais apontam que sim.",
        ]


    function fazerPergunta(){

        var respostaFinal = window.document.querySelector("h3#resposta")
        const totalRespostas = respostas.length
        const perguntaFeita = window.document.querySelector("input#pergunta")

        if (perguntaFeita.value == ""){
                window.alert("Faça uma pergunta.")
            return
        } else if (!perguntaFeita.value.includes("?")) {
                window.alert("Acho que perguntas possuem a interrogação.")
            return
        }

        console.log(perguntaFeita.value.includes("?"))
        //Gera números aleatórios
        const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

        respostaFinal.innerHTML = ` 
        <div>${perguntaFeita.value}</div>
        ${respostas[numeroAleatorio]} `

        /*
        setTimeout(function () {
            respostaFinal.style.opacity = 0
        } , 3000) 
        */ 
        return
    }