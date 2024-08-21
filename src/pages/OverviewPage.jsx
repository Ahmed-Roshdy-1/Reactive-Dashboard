import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react"
import Header from "../components/common/Header"
import StatCard from "../components/common/StatCard"
import { motion } from "framer-motion"

const OverviewPage = () => {
  return (
   <div className="flex-1 overflow-auto z-10">
     <Header title="Overview"/>
     <main className="mx-auto mx-w-7xl py-6 px-4 lg:px-8">
      {/* Stats */}
      <motion.div
         className="grid grid-cols-1 gap-5 sm:grid-cols-2  lg:grid-cols-4 mb-8"
         initial={{opacity:0,y:20}}
         animate={{opacity:1,y:0}}
         transition={{duration:1}}
      >
        <StatCard name="Total Sales" icon={Zap} value='$17.350' color="#6366f1" />
        <StatCard name="New Users" icon={Users} value='2.369' color="#8b5cf6" />
        <StatCard name="Total Products" icon={ShoppingBag} value='486' color="#ec4899" />
        <StatCard name="Conversion Rate" icon={BarChart2} value='16.7%' color="#10b981" />

      </motion.div>

     </main>

   </div>
  )
}

export default OverviewPage