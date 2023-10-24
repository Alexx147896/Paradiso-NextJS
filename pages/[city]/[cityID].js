import { useRouter } from 'next/router';
import BarcelonaLayout from '../../components/cityLayouts/BarcelonaLayout';
import MadridLayout from '../../components/cityLayouts/MadridLayout';
import BilbaoLayout from '../../components/cityLayouts/BilbaoLayout';
import SantanderLayout from '../../components/cityLayouts/SantanderLayout';
import SevillaLayout from '../../components/cityLayouts/SevillaLayout';
import ValenciaLayout from '../../components/cityLayouts/ValenciaLayout';
import ZaragozaLayout from '../../components/cityLayouts/ZaragozaLayout';
import GranadaLayout from '../../components/cityLayouts/GranadaLayout';



export default function CityPage() {
  const router = useRouter();
  const cityID = router.query.cityID;
  

switch (cityID) {
  case 'barcelona':
    return (
      <>
      <BarcelonaLayout />
      </>
    )
    break;

  case 'madrid':
    return (
      <>
      <MadridLayout />
      </>
    )
      break;

case 'bilbao':
  return (
    <>
    <BilbaoLayout />
    </>
  )
case 'sevilla':
  return (
    <>
    <SevillaLayout />
    </>
  )
case 'valencia':
  return (
    <>
    <ValenciaLayout />
    </>
  )
case 'zaragoza':
  return (
    <>
    <ZaragozaLayout />
    </>
  )
case 'santander':
  return (
    <>
    <SantanderLayout />
    </>
  )
case 'granada':
  return (
    <>
    <GranadaLayout />
    </>
  )

  default:
    break;
}






  
}
