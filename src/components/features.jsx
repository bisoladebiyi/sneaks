import { CheckCircleOutlined, EmojiEventsOutlined, LocalShippingOutlined, SupportAgentRounded } from '@mui/icons-material'
import React from 'react'

const Features = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-6 md:flex justify-between w-4/5 mx-auto md:w-auto md:px-10 lg:px-36 my-20 md:my-32">
                <div className="flex items-center">
                    <EmojiEventsOutlined className="scale-150 text-gray-700" />
                    <div className="ml-4">
                        <p className="text-sm text-gray-700 font-semibold">High Quality</p>
                        <p className="text-xs text-gray-500">crafted from top materials</p>

                    </div>
                </div>
                <div className="flex items-center">
                    <CheckCircleOutlined className="scale-150 text-gray-700" />
                    <div className="ml-4">
                        <p className="text-sm text-gray-700 font-semibold">Warrany Protection</p>
                        <p className="text-xs text-gray-500">Over 2 years</p>
                        
                    </div>
                </div>
                <div className="flex items-center">
                    <LocalShippingOutlined className="scale-150 text-gray-700" />
                    <div className="ml-4">
                    <p className="text-sm text-gray-700 font-semibold">Free Shipping</p>
                        <p className="text-xs text-gray-500">Order over $300</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <SupportAgentRounded className="scale-150 text-gray-700" />
                    <div className="ml-4">
                    <p className="text-sm text-gray-700 font-semibold">24 / 7 Support</p>
                        <p className="text-xs text-gray-500">Dedicated support</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
