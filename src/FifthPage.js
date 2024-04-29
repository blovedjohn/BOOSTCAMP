import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function FifthPage(){
    return(
        <div className="Fifth">

        <div>
        <h1>Learnie Bootcamp</h1>
        <div className="bet">
        </div>

        <div className='gem'>
        <p className="cod">Online Coding Boostcamps:</p>
        <p>Full-Time Coding Boostcamps</p>
        <p>Part-Time Coding Boostcamps</p> 
        <div>
        <p className="cod">Prepare:</p>
        <p>App Academy Open</p>
        </div>
        </div>
        <div className='tak'>
        Questions FAQs/ Contact us/ Talk with admissions
        <div className='talks'>
        <img src="./image/Find.png" alt="" width={40}/>
        <TwitterIcon className='Ui'/>
        <InstagramIcon/>
        </div>
        </div>
        </div>

    
     <div className="Reso">
        <p className="cod">Resourses:</p>
        <p>The Cohort-Our Blog</p>
        <p>Course Dates</p>
    </div>


        <div className="DOC">
        <p className="cod">Company:</p>
        <p>Students outcome</p>
        <p>Regulatory information</p>
        <p>Privacy Policy (updated 09/01/2022)</p>
        <p>Careers at Learnie Academy</p>
        </div>

        <div className="SWE">
        <p className="cod">Considering a career in SWE?</p>
        <p>What makes a good software Engineer</p>
        <p>SWE career Hub</p>
        <p>Coding Boostcamp Curriculum</p>
        <p>Careers Services</p>
        <div className="beti">
        </div>
        </div>

        
        </div>
    )
}

export default FifthPage;