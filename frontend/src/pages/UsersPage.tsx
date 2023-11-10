import UsageSpheres from '../components/UsageSpheres'
import AddOrder from '../components/AddOrder'
import QA from '../components/QA'
import Footer from '../components/Footer'
import BannerForUser from '../components/BannerForUser'
import LoginForUser from '../components/LoginForUser'
import UsersOrder from '../components/UsersOrder'
import Login from '../components/Login/Login'
import useToken from '../components/token/useToken'


export default function UsersPage() {

  const { token, setToken } = useToken();

  if(!token) {
      return <Login setToken={setToken} />
  }
  

  return (
    <div>
      <BannerForUser />
      <LoginForUser/>
      <UsersOrder/>
      <UsageSpheres />

      <AddOrder />
      <QA />
      <Footer />
    </div>
  )
}
