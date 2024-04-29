function FirstPage(){
    return(
        <div className="general">

        <div className="First">
        <h1 className="top">Here's What you'll get</h1>
        <p>With App Academy Open you’ll get free access to App Academy’s entire 24 <br/> Week Online Full-Time Bootcamp curriculum (that's over 500 hours of material!), which has <br/> placed thousands of people in software development jobs.</p>
        </div>

       <div className="Range">
        <div className="left">
        <img src="https://assets-global.website-files.com/5dcc7f8c449e597ed83356b8/5f405efaf224416677a6f172_Group%203.svg" alt="" width={50} className="Icon"/>
        <h4>500 hours of full-stack <br/> online curriculum</h4>
        <p>This is the same curriculum<br/> taught in our 24 Week Online <br/>Full-Time Bootcamp. You’ll learn<br/> everything full-stack from<br/> JavaScript to Python, and more.</p>
        </div>

        <div>
        <img src="https://assets-global.website-files.com/5dcc7f8c449e597ed83356b8/5f405f6554a6e46c47499985_Group%206.svg" alt="" width={50} className="Icon"/>
        <h4> Guidance on setting up<br/> your own coding<br/> environment</h4>
       <p>Don’t struggle for hours with<br/> setting up a coding environment.<br/> In one of the very first modules,<br/> we walk you through, step-by<br/>-step, exactly how to do just that.</p>
       </div>

       <div className="strug">
       <img src="https://assets-global.website-files.com/5dcc7f8c449e597ed83356b8/5f5eaa2a7ecff7bf9a03dc17_grow.svg" alt="" width={50} className="Icon"/>
       <h4>A progress-oriented user<br/> interface and experience</h4>
        <p>The curriculum is organized in<br/> topic-based modules, with<br/> estimated completion times and <br/>progress bars for each lesson. So<br/> you won't lose track of where you<br/> left off.</p>
       </div>
       </div>
       </div>
    )
}

export default FirstPage;