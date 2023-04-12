import React from 'react'
import { Pricing } from '../../components'
import { pricingapi } from '../../data'

const PricingPage = () => {
  return (
    <>
      <Pricing {...pricingapi} />
    </>
  )
}

export default PricingPage;
