import React from 'react';

const Blog =(props)=>{
    return(
        <div className='ui card'>
            <div className='content'>
                {props.children}
            </div>
            <div className='extra content'>
                <div className='ui two buttons'>
                    <button className='ui basic green button'
                            onClick={()=> alert('Approved')}>Approve</button>
                    <button className='ui basic red button'
                            onClick={()=>alert('Rejected')}>Reject</button>
                </div>
            </div>
        </div>
    )
};

export default Blog
