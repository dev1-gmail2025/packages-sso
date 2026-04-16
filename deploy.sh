#!/bin/bash

# 1. Run build
echo "Running npm run build..."
npm run build
if [ $? -ne 0 ]; then
  echo "Build failed! Exiting..."
  exit 1
fi

# 2. Run build-storybook
echo "Running npm run build-storybook..."
npm run build-storybook
if [ $? -ne 0 ]; then
  echo "Storybook build failed! Exiting..."
  exit 1
fi

# 3. Run npm add .
echo "Running npm add ."
npm add .
if [ $? -ne 0 ]; then
  echo "npm add . failed! Exiting..."
  exit 1
fi

# 4. Commit with current date
echo "Committing changes..."
DATE=$(date +'%Y-%m-%d')  # Generate current date
git add .
git commit -m "feat: build date $DATE"
if [ $? -ne 0 ]; then
  echo "Git commit failed! Exiting..."
  exit 1
fi

# 5. Push to git
echo "Pushing to git..."
git push
if [ $? -ne 0 ]; then
  echo "Git push failed! Exiting..."
  exit 1
fi

echo "Deployment script completed successfully!"