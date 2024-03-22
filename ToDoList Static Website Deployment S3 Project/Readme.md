# ToDoList Static Website Deployment S3 Project

This project showcases a simple to-do list application deployed as a static website using AWS S3 (Simple Storage Service). In the context of web development, "static" means that the content of the website remains fixed and does not change dynamically based on user interactions or database queries. This to-do list application allows users to add, edit, and delete tasks without the need for server-side processing.

The website is currently hosted. Visit [To Do List](https://to-do-list-project.s3.ap-south-1.amazonaws.com/todo_list.html)

## Features of AWS S3 Hosting

- **Scalability**: AWS S3 can handle any amount of traffic, making it suitable for websites with varying levels of demand.
- **Cost-Effectiveness**: S3 offers a pay-as-you-go pricing model, allowing users to pay only for the storage and bandwidth they use.
- **High Availability and Durability**: AWS S3 stores data across multiple availability zones, ensuring high availability and durability.
- **Static Website Hosting**: S3 supports hosting static websites directly from buckets, providing a simple and cost-effective solution for hosting static content.

## How to Deploy the Project

1. **Create an S3 Bucket**: 
   - Sign in to the AWS Management Console and navigate to the S3 service.
   - Click on "Create bucket" and follow the prompts to create a new bucket.
  
2. **Upload Website Files**: 
   - Upload your HTML, JavaScript, CSS, and other assets to the S3 bucket.
   - Make sure to configure the bucket for static website hosting and set appropriate permissions.

3. **Enable Static Website Hosting**: 
   - In the bucket properties, enable static website hosting and configure the index document.
   - Optionally, configure a custom domain and SSL certificate using AWS Certificate Manager and Amazon Route 53.

4. **Set Bucket Policy**: 
   - Add a bucket policy to allow public access to the objects in the bucket.
   - This ensures that your website is accessible to visitors.

5. **Access Your Website**: 
   - Once the setup is complete, AWS S3 will provide a URL for accessing your static website.
   - Share this URL with others to access your to-do list application.

## Use Cases

- **Personal Website Deployment**: Host your personal website or portfolio on AWS S3, showcasing your projects, resume, and contact information.

- **Company Website Hosting**: Deploy a company website on AWS S3 to provide information about your business, products, and services to customers and clients.

- **Event Landing Page**: Create a static landing page for events, conferences, or workshops, providing event details, schedules, and registration forms.

- **Documentation Hosting**: Host documentation or user guides for software projects on AWS S3, making them easily accessible to users and developers.

## Notes

- **IAM Policies**: 
  - When setting up permissions for accessing S3 buckets, ensure that appropriate IAM policies are applied to user roles or groups. 
  - Use the principle of least privilege to grant only the necessary permissions for users or services accessing the bucket.

- **Additional Configurations**:
  - Consider configuring lifecycle policies to manage the lifecycle of objects in your bucket, such as transitioning objects to cheaper storage classes or deleting expired objects.
  - Explore other AWS services that can complement S3 hosting, such as CloudFront for content delivery, AWS Lambda for serverless processing, and AWS WAF for web application firewall protection.


