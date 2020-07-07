import React ,{Component} from 'react';

export default class about extends Component{
    render(){
        return(
            <section id="about">
                <div className="row">
                    <div className="three columns">
                    <img className="profile-pic" src="images/profilepic.jpg" alt />
                    </div>
                    <div className="nine columns main-col">
                    <h2>Sobre mi</h2>
                    <p>
                        Mi nombre es Libio Armando Quispe Hancco y soy estudiante de Ingenieria Informatica y de Sistemas de la Universidad Nacional
                        de San Antonio Abad del Cusco, soy un chico alegre cuando hay que serlo y con quien creo que hay que serlo, me encanta los deportes y en
                        especial el futbol y entre otros deportes, me gustan los retos.
                    </p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Detalles de Contacto</h2>
                            <p className="address">
                                <span>Libio Armando</span>
                                <br />
                                <span>Calle Rimiñahui Z-9
                                <br />
                                Alto los incas, Cusco
                                </span>
                                <br />
                                <span>929 801 754</span>
                                <br />
                                <span>134541@unsaac.edu.pe</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href="https://drive.google.com/file/d/1E7LOh5cRp81IsySKDcdF5HTyW8H36Zyy/view" className="button"><i className="fa fa-download" />Download Curriculum</a>
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        );
    }
}
