
# Multi-OS-Server Deployment CFT Project

The Multi-OS-Server Deployment CFT project is an Infrastructure as Code (IaC) solution that automates the deployment of multiple EC2 instances with different operating systems using AWS CloudFormation Templates (CFT). It aims to provide a flexible and efficient way to provision server infrastructure on Amazon Web Services (AWS) while ensuring consistency and reducing manual intervention.

CloudFormation Templates (CFT) are declarative JSON or YAML files used to define and provision AWS infrastructure resources in a scalable and repeatable manner. The CloudFormation template included in this project defines the infrastructure resources required to launch multiple EC2 instances with different operating systems. It leverages AWS CloudFormation's declarative syntax to specify the instance configurations, including instance type, AMI ID, and SSH key pair.

## Benefits/Features of CFT

- **Automated Deployment**: CloudFormation automates the provisioning of EC2 instances, eliminating the need for manual intervention and reducing human error.
- **Infrastructure as Code**: The template serves as code, enabling version control, collaboration, and reproducibility of infrastructure deployments.
- **Consistency**: CloudFormation ensures consistent infrastructure deployments across environments, reducing configuration drift.
- **Drift Detection**: CloudFormation provides automatic drift detection, allowing you to identify and remediate any configuration changes made to deployed resources outside of CloudFormation.
- **Cost Optimization**: By defining infrastructure as code, you can optimize costs by easily scaling resources up or down based on demand.

## How to Run Template from Console

To deploy a CloudFormation template from the AWS Management Console, follow these steps:

1. **Navigate to CloudFormation**: Log in to the AWS Management Console and navigate to the CloudFormation service.

2. **Create Stack and Setup Template in it**: Click on "Create stack" to begin the stack creation process. Choose the method to specify the template - select "Upload a template file" to upload template file from your local machine, or choose "Specify an Amazon S3 template URL" to provide template file stored in Amazon S3.

3. **Manage Template Config and Confirm Creation**: Review the stack details and configuration options, then click "Create stack" to initiate the stack creation process.

4. **Monitor Creation**: Monitor the stack creation progress in the CloudFormation console. You can view the status and events related to the stack creation process, including any resources being created, updated, or deleted.

## Uses

1. **Development Environments**: Provision diverse server environments for software development and testing.

2. **Testing and QA**: Validate application compatibility and performance with multiple OS environments.

3. **Training and Education**: Enable hands-on learning with varied server instances.

4. **Multi-tier Applications**: Simplify deployment of multi-tier applications with diverse OS support.

5. **Proof of Concepts**: Rapidly prototype and validate new ideas with automated infrastructure deployment.   

## Result

After successfully deploying the CloudFormation stack, you should observe the following:

- Three EC2 instances launched with different operating systems (Windows, Ubuntu, Amazon Linux).
- Automatic drift detection enabled for the stack to detect any configuration changes.

## Notes

**Automatic Template Storage**: Upon successful deployment of the CloudFormation stack, AWS automatically creates an S3 bucket to store the CloudFormation templates and related artifacts. This bucket can be utilized for versioning, sharing, and managing the templates, providing a centralized location for future deployments and updates.
