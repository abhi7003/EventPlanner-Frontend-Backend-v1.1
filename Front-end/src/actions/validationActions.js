export const ADDUSER=(user)=>{
    return {
        type:'ADD_USER',
        payload: user
    }
}

export const REMOVEUSER=()=>{
    return{
        type:'REMOVE_USER'
    }
}

export const ADDVENUE=(venue)=>{
    return{
        type:'ADD_VENUE',
        payload: venue
    }
}

export const REMOVEVENUE=()=>{
    return{
        type:'REMOVE_VENUE'
    }
}

export const ADDMEAL=(meal)=>{
    return{
        type:'ADD_MEAL',
        payload: meal
    }
}

export const REMOVEMEAL=()=>{
    return{
        type:'REMOVE_MEAL'
    }
}


export const ADDDECORATION=(decoration)=>{
    return{
        type:'ADD_DECORATION',
        payload: decoration
    }
}

export const REMOVEDECORATION=()=>{
    return{
        type:'REMOVE_DECORATION'
    }
}

export const ADDVENUELIST=(venueList)=>{
    return{
        type:'ADD_VENUELIST',
        payload:venueList
    }
}

export const REMOVEVENUELIST=()=>{
    return{
        type:'REMOVE_VENUELIST',
    }
}

export const ADDSDATE=(sdate)=>{
    return{
        type:'ADD_SDATE',
        payload:sdate
    }
}

export const REMOVESDATE=()=>{
    return{
        type:'REMOVE_SDATE',
    }
}

export const ADDEDATE=(edate)=>{
    return{
        type:'ADD_EDATE',
        payload:edate
    }
}

export const REMOVEEDATE=()=>{
    return{
        type:'REMOVE_EDATE',
    }
}
