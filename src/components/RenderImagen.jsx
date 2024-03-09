import React from 'react'
import { delay, motion } from 'framer-motion'

const RenderImagen = ({title, url}) => {
    return (
        <div>
            
            <motion.img

                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: 1, scale: 1, transition: {
                        duration: 1,
                        delay: 1
                    }
                }}
                src={url} alt={title} />

            <motion.p
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: 1, scale: 1, transition: {
                        duration: 1,
                        delay: 2
                    }
                }} >{title}</motion.p>
        </div>
        
    );
}

export default RenderImagen;