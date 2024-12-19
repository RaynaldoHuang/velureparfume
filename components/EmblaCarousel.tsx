import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'

import { EmblaOptionsType } from 'embla-carousel'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from '@/components/EmblaCarouselArrowButtons'

import { product } from '@/lib/products'

type PropType = {
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const products = product

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container lg:mt-16 mt-10">
                    {
                        products.map((product: any) => (
                            <div className="embla__slide" key={product.id}>
                                <div className="bg-[#FAFAFA] flex-col justify-center py-6 px-6 rounded-[20px]">
                                    <div className='w-full'>
                                        <Image
                                            src={product.image}
                                            alt=''
                                            className='rounded-[10px]'
                                        />
                                    </div>
                                    <h1 className='mt-4 text-2xl text-[#1F2D3E] font-sans'>{product.title}</h1>
                                    <p className='text-[#525252] mt-2 lg:text-base text-sm font-serif'>{product.desc}</p>
                                    <p className='mt-2 text-2xl font-sans text-[#BB8E5A]'>{product.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex justify-center mt-10 mb-20">
                <div className="flex space-x-4">
                    <div className='flex items-center justify-center'>
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} className='text-[#214A55] rounded-lg border border-3 border-[#214A55] flex justify-center items-center w-[50px] h-[50px]' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} className='text-white bg-[#214A55] rounded-lg flex justify-center items-center w-[50px] h-[50px]' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel
