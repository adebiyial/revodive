import Link from 'next/link'
import Image from 'next/image'
import Card from './Card'

const CardGuide = (props) => (
    <Card url={props.url} addclass="card--overlay">
        <Image 
            layout="responsive"
            width={600}
            height={400}
            src={props.image}
        />
       <div className="card--overlay__content-wrapper">
           <div className="card--overlay__content">
              <span className="card--overlay__content--secondary-info">{props.experience}</span>
               <span className="card--overlay__content--title">{props.title}</span>
                <span className="card--overlay__content--description">{props.description}</span>
           </div>
        </div>
    </Card>
)

export default CardGuide