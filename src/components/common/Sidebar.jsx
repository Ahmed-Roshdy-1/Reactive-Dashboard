import { BarChart2, DollarSign, LucideShoppingBag, Menu, Settings, ShoppingCart, TrendingUp, Users } from "lucide-react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom"

const sidebarItems=[
    {name:"Overview",icon:BarChart2,color:"#6366f1",href:"/",},
    { name: "Products", icon: LucideShoppingBag, color: "#8B5CF6", href: "/products" },
	{ name: "Users", icon: Users, color: "#EC4899", href: "/users" },
	{ name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
	{ name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
	{ name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
	{ name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
]

const Sidebar = () => {
    const [isSidebarOpen,setIsSidebarOpen]=useState(true)
    const [width, setWidth] = useState(window.innerWidth);
    // Function to update width
    const handleResize = () => setWidth(window.innerWidth);

    // Add event listener to track window resizing
    window.addEventListener('resize', handleResize);
    
  return (
    <motion.div 
       className={`relative  z-10 translate-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen?'w-64 max-sm:w-20':"w-20"} `}
       animate={{width:isSidebarOpen&&width>=640 ? 256 : 80}}
    >
        <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700 ">
            
            <motion.button 
               whileHover={{scale:1.1}}
               whileTap={{scale:.9}}
               onClick={()=>setIsSidebarOpen(!isSidebarOpen)} 
               className="p-2 rounded-full hover:bg-gray-700 translate-colors max-w-fit max-sm:hidden"
                     
            >
                <Menu size={24} />

            </motion.button>
            <nav className="mt-8 flex-grow">
                {sidebarItems.map((item)=>(
                    <Link key={item.href} to={item.href}>
                        <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg transition-colors">
                            <item.icon size={24} style={{color:item.color, minWidth:24}} />
                            <AnimatePresence >
                                {isSidebarOpen &&(
                                    <motion.span 
                                       className="ml-4 whitespace-nowrap max-sm:hidden"
                                       initial={{opacity:0,width:0}}
                                       animate={{opacity:1,width:"auto"}}
                                       exit={{opacity:0,width:0}}
                                       transition={{duration:0.2,delay:0.3}}    
                                    >
                                       {item.name}
                                    </motion.span>
                                )}

                            </AnimatePresence>

                        </motion.div>

                    </Link>
                ))}
            </nav>
                        

        </div>

    </motion.div>
  )
}

export default Sidebar