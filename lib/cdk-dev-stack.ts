import * as cdk from 'aws-cdk-lib';
import { CodePipeline, ShellStep, CodePipelineSource } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkDevStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
  
    const testpipeline = new CodePipeline(this, 'testpipeline',{
      pipelineName: 'testpipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('aws-samples/cdk-pipelines-examples', 'main'),
        commands: [
          'npm install -g aws-cdk',
          'npm install',
          'npm run build',
          'npx cdk synth' ]
    })
  });

  }
}
