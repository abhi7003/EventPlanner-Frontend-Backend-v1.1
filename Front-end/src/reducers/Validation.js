

const iniState={
    user:{},
    venue:{},
    meal:{},
    decoration:{},
    venueList:[],
    startDate:{},
    endDate:{},
    eventList:[]
}

const Validation=(state=iniState,action)=>{
    console.log("action type recieved: "+action.type+" add Object receiver: "+action.payload);
    switch(action.type){
        case 'ADD_USER':return{
            ...state,
            user:action.payload
            }
          

        case 'REMOVE_USER':return{
           ...state,
           user:{}
        }

        case 'ADD_VENUE':return{
            ...state,
            venue:action.payload
        }

        case 'REMOVE_VENUE':return{
            ...state,
            venue:{}
         }

         case 'ADD_MEAL':return{
            ...state,
            meal:action.payload
        }

        case 'REMOVE_MEAL':return{
            ...state,
            meal:{}
         }

         case 'ADD_DECORATION':return{
            ...state,
            decoration:action.payload
        }

        case 'REMOVE_DECORATION':return{
            ...state,
            decoration:{}
         }

         case 'ADD_VENUELIST':return{
            ...state,
            venueList:action.payload
        }

        case 'REMOVE_VENUELIST':return{
            ...state,
            venueList:[]
         }

         case 'ADD_SDATE':return{
             ...state,
            startDate:action.payload,
         }

         case 'ADD_EDATE':return{
            ...state,
           endDate:action.payload
        }

        case 'REMOVE_SDATE':return{
            ...state,
           startDate:''
        }

        case 'REMOVE_EDATE':return{
           ...state,
          endDate:''
       }

        default:return{
            ...state
        }
    }
}    


export default Validation;