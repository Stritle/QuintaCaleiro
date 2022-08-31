import React from 'react'
import Footer from '../componentes/Footer';
import Navbar from '../componentes/Navbar';
import exQ from '../images/exQ.jpg'

const Quinta = () => {
    return (
        <div className="quinta">
            <Navbar />

            <h1> A Quinta do Caleiro</h1>
            <p>Situada na margem direita do rio Douro, entre a Régua e o Pinhão, a Quinta do Crasto é uma propriedade com 135 hectares de área total, 74 dos quais ocupados por vinhas, que usufrui das condições de excelência proporcionadas pela região do Cima Corgo, onde está localizada de forma privilegiada, para produzir vinhos do Douro e do Porto, das gamas premium e super premium, a partir de algumas das vinhas mais antigas e históricas do Douro.</p>
            <img src={exQ}></img>
            <p>A Região Demarcada do Douro divide-se em três sub-regiões – Baixo Corgo, Cima Corgo e Douro Superior – cada uma destas áreas com características particulares em termos topográficos, geológicos, climatéricos, hídricos, entre outros aspetos, que impressionam quem as visita e que tornam o Douro tão único e especial no panorama vinícola mundial.</p>
            <img src={exQ}></img>
            <p>Na sub-região do Cima Corgo, o clima é mais seco do que na sub-região do Baixo Corgo, o que a torna menos produtiva em termos de rendimento por parcela de vinha, mas mais capaz de produzir vinhos complexos, concentrados e intensos. O solo da Quinta do Crasto pertence à formação geológica do complexo xisto e foi trabalhado em íngremes encostas junto ao rio, numa admirável e avassaladora ação humana para o cultivo: de vinhas em tradicionais socalcos do Douro, no caso das parcelas mais antigas de vinhas, algumas centenárias; de vinhas na vertical, para as vinhas mais jovens em zonas cuja inclinação é inferior a 35%, com uma plantação média de 5.000 mil pés por hectare; e de vinhas em patamares de um ou dois bardos, numa densidade de plantação de 3.000 a 3.500 pés por hectare, em zonas de inclinação superior a 40%.
            A excelente exposição solar é predominantemente nascente e sul o que, conjugada com as condições secas da sub-região do Cima Corgo e a capacidade que o solo xistoso tem de absorver e reter o calor, obrigam as raízes das vinhas a mergulhar nos terrenos, a profundidades na ordem das dezenas de metros, em busca de água numa autêntica competição entre elas, o que contribui para a complexidade e intensidade dos vinhos aqui produzidos.</p>
            <img src={exQ}></img>
            <p> A Quinta do Crasto tem inúmeras parcelas de Vinhas Velhas neste terroir de eleição, como a Vinha Maria Teresa, a Vinha dos Cardanhos de Cima ou a Vinha da Ponte, referindo apenas algumas das mais significativas entre dezenas de outras pequenas parcelas, num total de 40 hectares de área de vinha velha, o que tornam os vinhos da Quinta do Crasto, colheita após colheita, tão únicos e irrepetíveis no seu carácter e singularidade.</p>
            <img src={exQ}></img>
            <p>
                Mas a qualidade dos mesmos e deste terroir também passa pela paixão que toda a equipa da Quinta do Crasto coloca na sua elaboração, tratando das videiras pelas suas próprias mãos desde a poda até à colheita, garantindo controlo e rigor extremos em todo o processo da viticultura e enologia. Os importantes investimentos realizados nos últimos anos na Quinta do Crasto permitiram não só modernizar as vinhas, como as instalações de vinificação, o que assegura a consistência na produção de vinhos de elevada qualidade, a cada ano, verdadeiras e intensas expressões deste património tão invulgar que é o terroir do Douro, levando-o a quem os degusta e aprecia.
            </p>
            <Footer />
        </div>
    )
}

export default Quinta;