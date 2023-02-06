import './estilos.css';

export default function SecaoSobre() {
    return (
        <section id='sobre' className='secao-sobre'>
            <div className='limitar-secao container-sobre'>
                <h3>QUEM SOMOS NÓS?</h3>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao públicode renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>

            <div className='box-cards'>
                <img src="assets/loja.png"></img>
                
                <div className='card'>
                    <h4>Nossas Filiais</h4>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>

                <div className='card'>
                    <h4>Atendimento Flexivel</h4>
                    <p>Nossa equipe é treinada para te atender</p>
                </div>

                <img src='assets/atendimento.png'/>
            </div>
        </div>
    </section>
    )
}