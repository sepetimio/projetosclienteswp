// Agenda Mix: oportunidades da semana, curadoria WePost.
// Para publicar uma nova semana, adicione um objeto no INÍCIO da lista.
// tipo: futebol | data | comercial | cidade | casa
// potencial: alto | medio
window.AGENDA_MIX = {
  semanas: [
    {
      id: "2026-12-02",
      titulo: "02 a 06 de dezembro",
      publicadoEm: "Domingo, 29/11",
      nota: "Semana de encerramento do futebol brasileiro e de dinheiro do 13º no bolso. Boa semana para fazer barulho.",
      dias: [
        {
          dia: "Quarta", data: "02/12",
          itens: [
            {
              id: "q1", tipo: "futebol", potencial: "alto",
              titulo: "Rodada final do Brasileirão", sub: "10 jogos ao mesmo tempo",
              hora: "21h30",
              porque: "Os 10 jogos da última rodada acontecem ao mesmo tempo, às 21h30. É a noite que encerra o campeonato, com festa de título, briga por vaga e fuga do rebaixamento.",
              ideia: "Noite da Rodada Final: jogos nas telas, placar ao vivo da rodada e balde promocional a cada gol do time da casa."
            },
            {
              id: "q2", tipo: "data", potencial: "medio",
              titulo: "Dia Nacional do Samba", sub: "Clima de samba e pagode",
              hora: "Noite toda",
              porque: "Data celebrada em todo o país em 2 de dezembro. Combina com a pegada de point e rende conteúdo leve para o feed.",
              ideia: "Quarta do Samba: playlist de samba e pagode, petisco especial e chamada para esquentar antes dos jogos."
            }
          ]
        },
        {
          dia: "Quinta", data: "03/12",
          itens: [
            {
              id: "t1", tipo: "comercial", potencial: "alto",
              titulo: "Confras de fim de ano", sub: "Abrir reservas",
              hora: "Lançamento",
              porque: "Começo de dezembro é quando empresas e turmas fecham onde vão fazer a confra de fim de ano. Quem anuncia primeiro garante as reservas.",
              ideia: "Lançar o pacote Confra na Mix: reserva de mesas, combo de baldes e porções para grupos, com chamada para o WhatsApp."
            }
          ]
        },
        {
          dia: "Sexta", data: "04/12",
          itens: [
            {
              id: "s1", tipo: "comercial", potencial: "alto",
              titulo: "Sexta do 13º", sub: "1ª sexta com 13º no bolso",
              hora: "A partir das 17h",
              porque: "A primeira parcela do 13º salário tem que ser paga até 30 de novembro. É a primeira sexta do mês com o povo mais folgado.",
              ideia: "Sextou do 13º: happy hour com cerveja em dobro em um horário específico e conteúdo bem-humorado sobre o 13º."
            }
          ]
        },
        {
          dia: "Sábado", data: "05/12",
          itens: [
            {
              id: "b1", tipo: "casa", potencial: "medio",
              titulo: "Sábado de feijoada", sub: "Virar tradição da casa",
              hora: "A partir das 11h",
              porque: "Repetir a feijoada do dia 28/11 se ela funcionar e transformar em tradição de sábado da Mix.",
              ideia: "Feijoada da Mix toda semana, com artes no mesmo padrão visual para o público reconhecer de longe."
            },
            {
              id: "b2", tipo: "comercial", potencial: "medio",
              titulo: "Esquenta da final", sub: "Véspera da Copa do Brasil",
              hora: "Noite",
              porque: "Véspera da final da Copa do Brasil. Torcedor já entra no clima no sábado.",
              ideia: "Post de contagem regressiva e reserva de mesa para assistir a final na Mix."
            }
          ]
        },
        {
          dia: "Domingo", data: "06/12",
          itens: [
            {
              id: "d1", tipo: "futebol", potencial: "alto",
              titulo: "Final da Copa do Brasil", sub: "Grêmio x Palmeiras",
              hora: "Horário a definir",
              porque: "Primeira final em jogo único da história da Copa do Brasil, no Mané Garrincha, em Brasília. É o último jogo da temporada do futebol brasileiro.",
              ideia: "Domingo de Final: transmissão, combo da final e arte no mesmo estilo da Libertadores, que já está pronta como referência."
            }
          ]
        }
      ],
      radar: [
        "09/12 (quarta): estreia do campeão da Libertadores na Copa Intercontinental, contra o Toluca. Vale se o Palmeiras levar a Libertadores no dia 28.",
        "Dezembro todo: confraternizações, Natal e Réveillon. Quanto antes a Mix aparecer como opção, melhor."
      ]
    }
  ]
};
