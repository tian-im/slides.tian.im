import { Presentation } from "reveals/Presentation"
import { Code } from "reveals/CodeBlock"
import { Notes } from "reveals/Notes"
import { Slide } from "reveals/Slide"

export default () => (
  <Presentation>
    <SelfIntroduction />
    <TeamLeadExperience />
    <MachineLearningExperience />
    <RoleDescription />
    <QuestionsForGitlab />
  </Presentation>
)

const SelfIntroduction = () => (
  <Slide>
    <Slide>
      <h2>Self-Introduction</h2>
    </Slide>
    <Slide>
      <h2>Senior</h2>
    </Slide>
  </Slide>
)

const TeamLeadExperience = () => (
  <Slide>
    <Slide>
      <h2>Have you lead a team and what did you do?</h2>
    </Slide>
  </Slide>
)

const MachineLearningExperience = () => (
  <Slide>
    <Slide>
      <h2>Do you have any machine learning experience?</h2>
    </Slide>
  </Slide>
)

const RoleDescription = () => (
  <Slide>
    <Slide>
      <h2>What will the role look like?</h2>
    </Slide>
  </Slide>
)

const QuestionsForGitlab = () => (
  <Slide>
    <Slide>
      <h2>Questions for Gitlab</h2>
    </Slide>
  </Slide>
)
