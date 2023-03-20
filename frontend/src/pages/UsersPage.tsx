import UsageSpheres from '../components/UsageSpheres'
import AddOrder from '../components/AddOrder'
import QA from '../components/QA'
import Footer from '../components/Footer'
import BannerForUser from '../components/BannerForUser'
import LoginForUser from '../components/LoginForUser'
import UsersOrder from '../components/UsersOrder'


export default function UsersPage() {
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
