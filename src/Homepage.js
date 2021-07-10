import "./Homepage.css";
import {motion} from "framer-motion"

/** Homepage Component
 * 
 * Props:
 * - currUser {}
 * 
 * Routes -> Homepage
 */
function Homepage({ currUser }) {

  if (!currUser) {
    return (
      <div className="Homepage-background">
        <div className="row">
          <div className="col-10 offset-1">
          <motion.div className="Homepage"
          animate={{ x: 0 }}
          initial={{ x: 2000 }}
          transition={{delay:1}}
          >
            <h1 className="Logo">sharebnb</h1>
          </motion.div>
          <motion.div className="Homepage"
          animate={{ x: 0 }}
          initial={{ x: -2000 }}
          transition={{delay:1.5}}
          >
            <p className="HomepageP">Where Sharing is Caring</p>
          </motion.div>
          </div>
        </div>
        </div>
    )
  }
  return (
    <div className="Homepage-background">
      <div className="row">
        <div className="col-10 offset-1">
          <motion.div className="Homepage"
          animate={{ x: 0 }}
          initial={{ x: 2000 }}
          transition={{delay:1}}
          >
            <h1 className="Logo">sharebnb</h1>
          </motion.div>
          <motion.div className="Homepage"
          animate={{ x: 0 }}
          initial={{ x: -2000 }}
          transition={{delay:1.5}}
          >
            <p className="HomepageP">Where Sharing is Caring</p>
          </motion.div>
        </div>
      </div>
      </div>

  )
}

export default Homepage;