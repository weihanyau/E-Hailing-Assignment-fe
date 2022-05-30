import PassengerPageComponent from "../Component/PassengerPageComponent"
import Head from 'next/head'


function Passenger() {
  return (
    <div style={{backgroundImage: "url(passenger-bg.jpg)", backgroundSize: "cover", height: "100vh"}}>
            
            <Head>
                <title>Driver</title>
                <link rel="icon" href="/pupg-icon.ico" />
            </Head>

            <div style={{
                position: "absolute", 
                top: "50%", 
                left: "50%",
                transform: "translate(-50%, -50%)"
                }}>
                <PassengerPageComponent />
            </div>
        </div>
  )
}

export default Passenger