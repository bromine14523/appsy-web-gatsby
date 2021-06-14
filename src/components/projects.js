import React, { Component } from "react"

const DefaultSite = "https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg"
const DefaultName = "Simple project"
const DefaultTags = ["Design", "Development", "Maintenance", "Hosting"]

class ProjectTag extends Component {
    render() {
      return (
        <div className="flex items-center rounded-full leading-none py-2 px-8 bg-indigo-400 border-purple-200 text-white text-xs font-light mr-2 border mt-2">{this.props.name}</div>
      )
    }
  }

class Project extends Component {
    render() {
      return (
        <a href="#">
            <div className="group transition-all duration-500 flex flex-col bg-gray-50 rounded-md shadow-xl hover:shadow-2xl">
                <img src={this.props.site} className="h-48 w-full rounded-t-md object-cover" />
                <div className="flex flex-col p-4">
                    <h2 className="text-indigo-600 text-sm">{this.props.name}</h2>
                    <h2 className="font-semibold text-black">Gardener business card</h2>
                </div>
                <div className="flex flex-wrap px-4">
                    {this.props.tags.map(item => <ProjectTag name={item} />)}
                </div>

                <div className="flex flex-wrap p-4 justify-end">
                    <span className="font-medium text-indigo-600 group-hover:text-indigo-400 mr-2">See result</span>
                    <span className="transform-all duration-300 w-0 group-hover:w-1"></span>
                    <svg className="h-6 w-6 text-indigo-600 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </a>
      )
    }
  }

function Projects() {
  return (
    <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Completed projects</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                See what we are good at
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                <Project site={DefaultSite} name={DefaultName} tags={DefaultTags} />
                <Project site={DefaultSite} name={DefaultName} tags={DefaultTags} />
                <Project site={DefaultSite} name={DefaultName} tags={DefaultTags} />
                <Project site={DefaultSite} name={DefaultName} tags={DefaultTags} />
            </dl>
          </div>
        </div>
      </div>
  )
}


export default Projects
