import React from 'react'
import {Row,Column} from '../components/LayoutGrid';

const topContainer = () => {
  return (
   <>
   <Row>
    /note that the class could be gives to the column without using the div inside ( Try it )/
    <Column>
    /this div can have the text side or the images side so the properties will be put in a class or a mixin then given to the fiv throw the class/
    <div>

    </div>
    </Column>

    <Column>
    /this div can have the text side or the images side so the properties will be put in a class or a mixin then given to the fiv throw the class/
    <div>

    </div>
    </Column>

   </Row>
   </>
  )
}

export default topContainer