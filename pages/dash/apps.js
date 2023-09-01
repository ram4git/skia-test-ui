import Link from 'next/link';

export default function Home() { 


    return (
        <div className=" flex flex-row space-x-2 spacing-y-2 pt-8 px-4">
          <div className="py-2 px-6 bg-blue-500 rounded-sm text-white rounded-sm shadow-sm">
            <Link
                href="/automation/landing"
                className=" bg-blue-500 rounded-sm text-white rounded-sm shadow-sm"
            >
                OPEN IN SAME TAB
            </Link>    
          </div>

          <div className="py-2 px-6 bg-blue-500 rounded-sm text-white rounded-sm shadow-sm">
          <a
                target='_blank' rel="noreferrer"
                href="/automation/landing"
                className=" bg-blue-500 rounded-sm text-white rounded-sm shadow-sm"
            >
                OPEN IN NEW TAB
            </a>
          </div>

          <div className="py-2 px-6 bg-blue-500 rounded-sm text-white rounded-sm shadow-sm">
          <a href="https://www.hubspot.com" target='_blank' rel="noreferrer">HubSpot</a>
    
          </div>
          <div className="py-2 px-6 bg-blue-500 rounded-sm text-white rounded-sm shadow-sm">
          <a href="https://www.salesforce.com/products/genie/overview" target='_blank' rel="noreferrer">Salesforce</a>
  
          </div>
          <div className="py-2 px-6 bg-blue-500 rounded-sm text-white rounded-sm shadow-sm">
          <a href="https://www.atlassian.com/software/jira" target='_blank' rel="noreferrer">JIRA</a>    
          </div>


        </div>
      );
    };





