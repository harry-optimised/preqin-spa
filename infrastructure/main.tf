provider "aws" {
  region  = "eu-west-2"
  profile = "personal"
}

terraform {
  backend "s3" {
    bucket         = "infrastructure.harrysprojects.com"
    key            = "preqin-spa.tfstate"      
    region         = "eu-west-2"
    profile        = "personal"
    encrypt        = true
  }
}

resource "aws_s3_bucket" "www" {
  bucket = "preqin-spa.harrysprojects.com"
}

resource "aws_s3_bucket_website_configuration" "website-configuration" {
  bucket = aws_s3_bucket.www.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }

  routing_rule {
    condition {
      key_prefix_equals = "docs/"
    }
    redirect {
      replace_key_prefix_with = "documents/"
    }
  }
}

resource "aws_s3_bucket_public_access_block" "bucket_access_block" {
  bucket = aws_s3_bucket.www.id

  block_public_acls   = false
  block_public_policy = false
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.www.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = "*"
        Action = [
          "s3:GetObject"
        ]
        Resource = [
          "${aws_s3_bucket.www.arn}/*"
        ]
      }
    ]
  })
}

