import Title from "./Title"
import { servicesData } from '../Data'; 
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title='our' subTitle='servieces'/>

      <div className="section-center services-center">
        {servicesData.map((service) => {
          return <Service key={service.id} {...service}/>;

          
        })}
      </div>
    </section>
  )
}
export default Services;