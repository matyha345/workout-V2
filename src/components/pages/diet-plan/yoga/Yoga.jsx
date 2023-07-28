import { useNavigate } from "react-router-dom"
import Layout from "../../../layout/Layout"
import DietPlan from "../DietPlan"
import ButtonHome from "../../../ui/button/button-home/ButtonHome"


const Yoga = () => {
    const nav = useNavigate()
    return(
        <Layout customStyle={{ height: 'auto' }}>
            <div style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}} ><ButtonHome bgLink={() => nav('./Home')} /></div>
            {/* <DietPlan titleText={} planTitle={} bottomText={} dataMap={}/> */}
        </Layout>
    )
}

export default Yoga