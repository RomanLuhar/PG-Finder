const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const propertyDetailsSchema = new Schema({
    id :{
        type:Number
    },
    type :{
        type:String
    },
    description :{
        type:String
    },
    image :{
        type:String
    },
    imageLg :{
        type:String
    },
    country :{
        type:String
    },

    address :{
        type:String
    },
    bedrooms :{
        type:String
    },
    bathrooms :{
        type:String
    },
    surface :{
        type:String
    },
    year :{
        type:String
    },
    price :{
        type:String
    },
    agent :{

        image :{
            type:String
        },
        name :{
            type:String
        },
        phone :{
            type:String
        },
    }

    
        

})

module.exports= mongoose.model('propertyDetails',propertyDetailsSchema);
    
//  This is the schema for the property details
//     id: 1,
//     type: 'House',
//     name: 'House 1',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
//     image: House1,
//     imageLg: House1Lg,
//     country: 'United States',
//     address: '7240C Argyle St. Lawndale, CA 90260',
//     bedrooms: '6',
//     bathrooms: '3',
//     surface: '4200 sq ft',
//     year: '2016',
//     price: '110000',
//     agent: {
//       image: Agent1,
//       name: 'Patricia Tullert',
//       phone: '0123 456 78910',
//     },