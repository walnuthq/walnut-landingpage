
import { Layout } from "./components/Layout"
import { SparkleIcon } from "./components/SparkleIcon"
import { article as Article, img as Image } from "./components/mdx"
import CommitSuggestionsImage from '@/images/commit-suggestions.png'
import ConfigurationFiles from '@/images/configuration-files.png'

export default function Page() {

  return (
    <Layout>
        <Article date={'2023-03-03T00:00Z'} id='commit-message-suggestions'>
            <Image src={CommitSuggestionsImage} alt='Commit suggestions'/>
            <>
              <h2 className="font-bold my-4 text-xl">Commit message suggestions</h2>
              <p className="text-gray-500">
                In the latest release, added support for commit message and description suggestions
                via an integration with OpenAI. Commit looks at all of your changes, and feeds that into
                the machine with a bit of prompt-tuning to get back a commit message that does a
                surprisingly good job at describing the intent of your changes.
              </p>
              <h3 className="flex items-center gap-2 font-bold my-4 text-base">
                <SparkleIcon className="w-5 h-5"/> Improvements
              </h3>
              <ul className="list-disc text-gray-500 pl-6">
                <li>Added commit message and description suggestions powered by OpenAI</li>
                <li>Fixed race condition that could sometimes leave you in a broken rebase state</li>
                <li>
                  Improved active project detection to try and ignore file changes triggered by the
                  system instead of the user
                </li>
                <li>Fixed bug that sometimes reported the wrong number of changed files</li>
              </ul>
            </>
        </Article>
        <Article date={'2023-04-01T00:00Z'} id='project-configuration-files'>
            <Image src={ConfigurationFiles} alt='Configuration files'/>
            <>
              <h2 className="font-bold my-4 text-xl">Project configuration files</h2>
              <p className="text-gray-500">
              Added support for creating per-project `.commitrc` files that override your global
                settings for that particular project. Went with YAML for these because personally
                Sick of quoting keys in JSON all the time, or accidentally leaving in a trailing comma.
              </p>
              <h3 className="flex items-center gap-2 font-bold my-4 text-base">
                <SparkleIcon className="w-5 h-5"/> Improvements
              </h3>
              <ul className="list-disc text-gray-500 pl-6">
                <li>Added commit message and description suggestions powered by OpenAI</li>
                <li>Fixed race condition that could sometimes leave you in a broken rebase state</li>
                <li>
                  Improved active project detection to try and ignore file changes triggered by the
                  system instead of the user
                </li>
                <li>Fixed bug that sometimes reported the wrong number of changed files</li>
              </ul>
            </>
        </Article>
    </Layout>
  )
}