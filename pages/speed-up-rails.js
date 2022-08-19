import { Presentation, useClasses } from "reveals/Presentation"
import { CodeBlock, RubyBlock } from "reveals/CodeBlock"
import { Notes } from "reveals/Notes"
import { Slide } from "reveals/Slide"
import { Checkbox } from "components/Checkbox"

const toggleClasses = (event, ...classNames) => {
  classNames.forEach(className => {
    event.srcElement.classList.toggle(
      className,
      event.currentSlide.classList.contains(className)
    )
  });
}

const handleSlideChanged = (event) => {
  toggleClasses(event, 'problem', 'tool', 'optimization')
}

export default () => {
  return (
    <Presentation handleSlideChanged={handleSlideChanged}>
      <Slide>
        <h1>Speed Up Rails</h1>
        <h2>@tian_im</h2>
      </Slide>
      <PrioritizePerformance />
      <UnderstandTheProblem />
      <ActiveRecord />
      <DatabaseStatement />
      <HierarchyStructure />
      <Summary />
    </Presentation>
  )
}

const PrioritizePerformance = () => (
  <Slide>
    <Slide>
      <h2>How Performance is Ranked</h2>
    </Slide>
    <Slide>
      <h2>Classify Tasks</h2>
    </Slide>
    <Slide>
      <ul>
        <li>Bugs</li>
        <li>Features</li>
        <li>
          Tech Debts
          <div className="fragment fade-in"><small>↑ Performance issues</small></div>
        </li>
      </ul>
    </Slide>
    <Slide>
      <h2>Code Quality</h2>
    </Slide>
    <Slide>
      <img src="save-our-rails/code-quality-radar.png" />
    </Slide>
    <Slide>
      <h2>Performance Degrades</h2>
      <small>(same as test coverage)</small>
    </Slide>
    <Slide>
      <h2>Take It Seriously!</h2>
    </Slide>
    <Slide>
      <h2>Before It Becomes a Problem</h2>
    </Slide>
    <Slide>
      <ul>
        <li>Server crashes</li>
        <li>Raise funds, esp. before IPO</li>
      </ul>
    </Slide>
  </Slide>
)

const UnderstandTheProblem = () => (
  <Slide>
    <Slide>
      <h2>Understand the Performance</h2>
    </Slide>
    <Slide>
      <h2>The No.1 Enemy</h2>
      <h2 className="fragment fade-in"><b>Repetition</b></h2>
      <RubyBlock>
{`pry(main)> puts Benchmark.measure { 1_000_000.times { a = '' } }
  0.134198   0.020083   0.154281 (  0.154829)
=> nil`}</RubyBlock>
    </Slide>
    <Slide>
      <h2>What is Slow?</h2>
    </Slide>
    <Slide>
      <ul className="plain">
        <li><Checkbox />Ruby</li>
        <li><Checkbox />Rails</li>
        <li><Checkbox />Database queries</li>
        <li><Checkbox />All of Above</li>
      </ul>
    </Slide>
    {/* <Slide>
      <h2>Is Ruby Slow?</h2>
    </Slide>
    <Slide>
      <h5>Nodejs: 15.6.0 Koa: 2.13.4 Squeel: 6.20.1 CPU: M1</h5>
      <CodeBlock>{``}</CodeBlock>
    </Slide>
    <Slide>
      <h5>Ruby: 15.6.0 Sinatra: 2.13.4 ActiveRecord: 6.20.1 CPU: M1</h5>
      <CodeBlock>{``}</CodeBlock>
    </Slide>
    <Slide>
      <h2>Ruby is as Fast as Nodejs</h2>
    </Slide>
    <Slide>
      <h2>Is Rails Slow?</h2>
    </Slide>
    <Slide>
      <h5>Ruby: 15.6.0 Rails: 2.13.4 ActiveRecord: 6.20.1 CPU: M1</h5>
      <CodeBlock>{``}</CodeBlock>
    </Slide>
    <Slide>
      <h2>Rails is Slower</h2>
    </Slide>
    <Slide>
      <h2>All the features</h2>
    </Slide>
    <Slide>
      <h2>Are Database Queries Slow?</h2>
    </Slide>
    <Slide>
      <h5>Ruby: 15.6.0 Sinatra: 2.13.4 ActiveRecord: 6.20.1 CPU: M1</h5>
      <CodeBlock>{``}</CodeBlock>
    </Slide>
    <Slide>
      <h2>Database Queries are Slow!</h2>
    </Slide> */}
    <Slide>
      <h2>IO is Slow!</h2>
      <ul>
        <li>File IO</li>
        <li>Network IO
          <div><small>Database queries, API requests</small></div>
        </li>
      </ul>
    </Slide>
    <OptimizationStrategies />
    <Slide>
      <h2>Key Areas</h2>
    </Slide>
    <Slide>
      <ul>
        <li>ActiveRecord</li>
        <li>Database Statement</li>
        <li>GraphQL</li>
        <li className="fragment fade-out" data-fragment-index="2">Database Schema</li>
        <li className="fragment fade-out" data-fragment-index="2">Ruby: Object Allocation and Garbage Collect</li>
        <li className="fragment fade-out" data-fragment-index="2">Rails</li>
        <li className="fragment fade-out" data-fragment-index="2">Hierarchy</li>
      </ul>
    </Slide>
  </Slide>
)

const ActiveRecord = () => (
  <Slide>
    <Slide>
      <h2>ActiveRecord</h2>
    </Slide>
    <ToolSlide>
      <h2>Backtrace display</h2>
      <small>(find out where the DB query was triggered)</small>
    </ToolSlide>
    <ToolSlide>
      <h2>Gem <b>active_record_query_trace</b></h2>
      <img src="/save-our-rails/active_record_query_trace.png" />
      <small>(see <a href="https://github.com/brunofacca/active-record-query-trace">active-record-query-trace</a> for more)</small>
    </ToolSlide>
    <ToolSlide>
      <h2>Stats display</h2>
      <small>(summarize the count of DB queries for a HTTP request)</small>
    </ToolSlide>
    <ToolSlide>
      <h2>Gem <b>active_record_query_stats</b></h2>
      <RubyBlock>
        {`Query Stats
-----------
total: 6, real: 5, cached: 1
select: 4, insert: 0, update: 1, delete: 0
transaction: 0, savepoint: 0, lock: 0, rollback: 0, other: 0`}
      </RubyBlock>
      <small>(see <a href="https://github.com/tian-im/active_record_query_stats">active_record_query_stats</a> for more)</small>
    </ToolSlide>
    <Slide>
      <h2>ActiveRecord Associations</h2>
      <RubyBlock>
        {`user.messages`}
      </RubyBlock>
    </Slide>
    <Slide>
      <h2>👍👍👍👍👍👍👍👍<br />No more <br />SQL hand-crafting<br />👍👍👍👍👍👍👍👍</h2>
    </Slide>
    <ProblemSlide>
      <h2>It comes with a cost</h2>
      <RubyBlock>
        {`users.each do |user|
  user.messages # triggers a db query
end`}
      </RubyBlock>
      <b className="fragment fade-in">(Database IO operation)</b>
    </ProblemSlide>
    <ProblemSlide>
      <h2><b>AKA N+1 queries</b></h2>
    </ProblemSlide>
    <OptimizationSlide>
      <h2>Preload associations for a <b>scope</b></h2>
      <small>(see <a href="http://api.rubyonrails.org/classes/ActiveRecord/QueryMethods.html#method-i-includes" target="_blank">#includes</a>)</small>
      <RubyBlock>
        {`User.includes(:messages).first(10)`}
      </RubyBlock>
    </OptimizationSlide>
    <OptimizationSlide>
      <h2>Set <b>:inverse_of</b></h2>
      <small>(see <a href="https://guides.rubyonrails.org/association_basics.html#bi-directional-associations">Bi-directional Associations</a>)</small>
      <RubyBlock>
        {`User.has_many :messages, inverse_of: :recipient

Message.belongs_to(
  :recipient, class_name: "User", foreign_key: :user_id
)

message = user.messages.first
message.recipient # => no db query triggered`}
      </RubyBlock>
    </OptimizationSlide>
    <OptimizationSlide>
      <h2>Cache the records using <b>cache_key_with_version</b></h2>
      <small>(see <a href="http://api.rubyonrails.org/classes/ActiveRecord/Integration.html#method-i-cache_key_with_version">#cache_key_with_version</a>)</small>
      <RubyBlock>
        {`
user.cache_key_with_version # => "users/1-20220707132228762716"

Rails.cache.fetch user.cache_key_with_version do
  user.messages
end

user.touch # updated_at is changed
user.cache_key_with_version # => "users/1-20220809051121153710"`}
      </RubyBlock>
    </OptimizationSlide>
    <OptimizationSlide>
      <h2>Use foreign_key</h2>
      <small>(Avoid using association)</small>
      <RubyBlock>
        {`message.user_id == user.id

# instead of
message.recipient == user`}
      </RubyBlock>
    </OptimizationSlide>
    <OptimizationSlide>
      <h2>Preload association for an <b>array</b></h2>
      <RubyBlock>
        {`# Rails 6
ActiveRecord::Associations::Preloader
  .new.preload(user_array, :messages)

# Rails 7
ActiveRecord::Associations::Preloader
  .new(records: user_array, associations: :messages).call

user_array.first.messages # won't trigger db query`}
      </RubyBlock>
    </OptimizationSlide>
    <OptimizationSlide>
      <h2>Preload association using existing records</h2>
      <RubyBlock>
        {`user.association('messages').target = existing_message_array

user.messages # won't trigger db query`}
      </RubyBlock>
    </OptimizationSlide>
    <OptimizationSlide>
      <h2>Reuse existing association <br />and use <b>.find</b></h2>
      <small>(instead of using <b>.exists?</b> query)</small>
      <RubyBlock>
        {`# only when association data set is small
user.messages.find { |m| m.title == '...' }

# instead of
user.messages.exists?(title: '...')`}
      </RubyBlock>
    </OptimizationSlide>
    <OptimizationSlide>
      <h2>Reset when stale</h2>
      <RubyBlock>
        {`Message.create!(user: user, title: 'new message')

user.messages.reset if user.messages.loaded?

user.messages # will pull down the latest records`}
      </RubyBlock>
    </OptimizationSlide>
    <OptimizationStrategies />
  </Slide>
)

const DatabaseStatement = () => (
  <Slide>
    <Slide>
      <h2>Database Statement</h2>
      <small>(this talk focuses on PostgreSQL)</small>
    </Slide>
    <Slide>
      <h2>EXPLAIN ANALYZE</h2>
      <small>(run it on the data size similar to production)</small>
    </Slide>
    <Slide>
      <ul>
        <li>Types</li>
        <li>Rows</li>
        <li>Buffers</li>
        <li>Loops</li>
      </ul>
    </Slide>
    <Slide>
      <h2>Database Statement</h2>
      <ul>
        <li>Queries</li>
        <li>Views</li>
        <li>Data Manipulation</li>
        <li>Others
          <div><small>Transactions/Save Points, Functions, Triggers</small></div>
        </li>
      </ul>
    </Slide>
    <OptimizationSlide>
      <h2>Queries</h2>
      <ul>
        <li>Add proper index for <b>Column</b>/<b>Expression</b>
          <div><small>B-Tree, Hash-Tree, GIN (full text search), and etc.</small></div>
        </li>
        <li>Select just the required columns</li>
        <li>Others</li>
      </ul>
    </OptimizationSlide>
    <Slide>
      <h2>View vs Materialized View</h2>
      <ul>
        <li>View is a shorter version of query that indexes can't be added.</li>
        <li>Materialized view is more like an actual table that indexes can be added.</li>
      </ul>
    </Slide>
    <ProblemSlide>
      <h2>Insert/Update/Delete is Slow!</h2>
      <ul>
        <li>Validation
          <div><small>Not Null, Unique, Primary Key, Foreign Key, Default, Data Type, and etc.</small></div>
        </li>
        <li>Write to the table</li>
        <li>Update indexes</li>
        <li>Fire triggers</li>
        <li>Others
          <div><small>Update table inheritance/partitions, and etc.</small></div>
        </li>
      </ul>
    </ProblemSlide>
    <OptimizationSlide>
      <h2>Batch Insert/Update/Delete</h2>
    </OptimizationSlide>
    <OptimizationSlide>
      <h2>Redis is Faster</h2>
      <small>(For example, use <b>Sidekiq</b> over <b>DelayedJob</b>.)</small>
    </OptimizationSlide>
    <OptimizationSlide>
      <h2>Remove/Disable if not needed.</h2>
      <small>(For example, disable <b>PaperTrail</b>.)</small>
    </OptimizationSlide>
    <OptimizationStrategies />
  </Slide>
)

const HierarchyStructure = () => (
  <Slide>
    {/* <Slide>
      <h2>Hierarchy</h2>
    </Slide> */}
    <Slide>
      <h2>GraphQL</h2>
      <CodeBlock>
{`query Example {
  users {
    messages {
      body
    }
  }
}`}
      </CodeBlock>
    </Slide>
    <Slide>
      <h2>Data Loader</h2>
      <RubyBlock>
{`class AssociationLoader < RecordLoader
  def perform(objects)
    Preloader.includes(objects, @options || @model)
    objects.each { | object | fulfill(object, object.try(@model)) }
  end
end`}
      </RubyBlock>
    </Slide>
    {/* <Slide>
      <h2>Authorization</h2>
      <ul>
        <li>Object level</li>
        <li><del>Object level</del></li>
        <li>Field level</li>
      </ul>
    </Slide>
    <Slide>
      <h2>Flatten Structure</h2>
    </Slide> */}
  </Slide>
)

const Summary = () => (
  <Slide>
    <Slide>
      <h2>Summary</h2>
    </Slide>
    <OptimizationStrategies />
  </Slide>
)

const OptimizationStrategies = () => (
  <OptimizationSlide>
    <h2>Optimization Strategies</h2>
    <ul>
      <li>Minimize the no. of IO</li>
      <li>Re-use/cache the data</li>
      <li>Use faster alternatives</li>
    </ul>
  </OptimizationSlide>
)

const ProblemSlide = ({ children }) => (
  <Slide className="problem">
    {children}
  </Slide>
)

const ToolSlide = ({ children }) => (
  <Slide className="tool">
    {children}
  </Slide>
)

const OptimizationSlide = ({ children }) => {
  return (
    <Slide className="optimization">
      {children}
    </Slide>
  )
}

const DatabaseSchema = () => (
  <Slide>
    <Slide>
      <h2>Database Schema!!!</h2>
      <h2>Database Schema!!!</h2>
      <h2>Database Schema!!!</h2>
    </Slide>
    <Slide>
      <h2>It determines:</h2>
    </Slide>
    <Slide>
      <ul>
        <li>The upper limit</li>
        <li>The upper limit of the app</li>
      </ul>
    </Slide>
    <Slide>
      <ul>
        <li>3NF</li>
      </ul>
    </Slide>
  </Slide>
)

const Ruby = () => (
  <Slide>
    <Slide>
      <h2>Ruby</h2>
    </Slide>
    <ToolSlide>
      <h2>Profiler</h2>
      <ul>
        <li>ruby-prof</li>
        <li>stackprof</li>
        <li>memoryprofiler</li>
        <li>benchmark-ips</li>
      </ul>
    </ToolSlide>
  </Slide>
)

const Rails = () => (
  <Slide>
    <Slide>
      <h2>Rails</h2>
    </Slide>
    <ToolSlide>
      <h2>Load Test</h2>
      <div><small>JMeter, Flood.io, wrk, and etc.</small></div>
    </ToolSlide>
    <ToolSlide>
      <h2>APM</h2>
      <small>NewRelic, Scout, Skylight, and etc.</small>
    </ToolSlide>
    <OptimizationSlide>
      <h2>Rails.cache</h2>
    </OptimizationSlide>
    <OptimizationSlide>
      <ul>
        <li>Set the expiry</li>
        <li>Use the right cache key
          <div><small>ActiveRecord#cache_key_with_version</small></div>
        </li>
      </ul>
    </OptimizationSlide>
    <OptimizationSlide>
      <h2><code>bin/rails middleware</code></h2>
      <div><small>https://guides.rubyonrails.org/rails_on_rack.html#inspecting-middleware-stack</small></div>
    </OptimizationSlide>
  </Slide>
)
