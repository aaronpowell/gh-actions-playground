import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    core.debug(
      `Here's what the webhook was: ${JSON.stringify(github.context.payload)}`
    )
  } catch (e) {
    core.setFailed(e.message)
  }
}

run()
