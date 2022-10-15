import GitHubCalendar from 'react-github-calendar'
import './gitCalendar.css'
export const GitCalendar = () => {
  return (
    <div name="calender" className="gc-box">
      <div className=" ">
        <div className="gc-title-box">
          <p className="gc-title">Github Calender</p>
        </div>
        <div className="gc-cal">
          <div>
            <GitHubCalendar username="haresh2349" />
          </div>
        </div>
        <div className="gc-stats">
          <div className="gc-top">
            <img
              src="https://github-readme-stats.vercel.app/api?username=haresh2349&show_icons=true&include_all_commits=true&count_private=true&hide=issues,contribs&border_radius=0&locale=en&theme=dark"
              alt="hareshstats"
            />
          </div>
          <div className="gc-bottom">
            {' '}
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=haresh2349&layout=compact&hide=Shell&border_radius=0&theme=dark"
              alt="hareshlang"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
