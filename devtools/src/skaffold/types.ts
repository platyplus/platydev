export type Sync = { manual?: ManualSync[]; infer?: string[] }

export type Artifact = {
  image: string
  context: string
  docker?: {
    dockerfile?: string
    buildArgs?: Record<string, string>
  }
  sync?: Sync
}

export type Release = {
  name: string
  chartPath: string
  artifactOverrides?: {
    image?: string
  }
}

export type Activation = {
  command: string
}
type ManualSync = {
  src: string
  dest: string
}

type Build = {
  tagPolicy: {
    sha256?: Record<never, never>
  }
  artifacts: Artifact[]
}

export type Profile = {
  name: string
  activation: Activation[]
  build?: Build
}

export type Skaffold = {
  apiVersion: 'skaffold/v2beta7'
  kind: 'Config'
  build: Build
  deploy?: {
    helm: {
      releases: Release[]
    }
  }
  profiles: Profile[]
}
