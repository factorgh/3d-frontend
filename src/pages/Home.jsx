import React from 'react'
import {motion,AnimatePresence} from "framer-motion"
import { useSnapshot } from 'valtio'
import {
    headContainerAnimation,
    headTextAnimation,
    headContentAnimation,
    slideAnimation
} from "../config/motion"
import state from '../store'
import CustomButton from '../components/CustomButton'

const Home = () => {
    const snap = useSnapshot(state)
  return (
    <AnimatePresence>
        {snap.intro && <motion.section className='home' {...slideAnimation('left')}>
            <motion.header>
            <img src='./threejs.png'
            alt='nice imaage'
            className='w-8 h-8 object-contain'
            />
            </motion.header>
            <motion.div className='home-content' {...headContainerAnimation}> 
            <motion.div {...headTextAnimation}>
            <h1 className='head-text'>
                LET'S <br className='xl:block hidden '/>DO IT!
            </h1>
            </motion.div>
            <motion.div className='flex flex-col gap-5' {...headContentAnimation}>
                <p className='max-w-md font-normal text-grey-600 text-base' >
                    Create your unique t-shirt brands with our new 3D customization tool.<strong>
                        Unleash your ideas 
                    </strong>{" "} and define your own style and brand
                </p>
                <CustomButton 
                type="filled"
                title="customize it"
                handleClick={()=> state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                />
            </motion.div>
            </motion.div>
            </motion.section>} 
    </AnimatePresence>
  )
}

export default Home