---
layout: page
title: Secure File Sharing System
description: Fully secure end-to-end encrypted system for creating and sharing files through an insecure database
img: assets/img/files.png
importance: 2
category: academic
giscus_comments: false
---

Skills: Go(Golang), Symmetric and Assymetric Cryptography, Signatures, Slow Hashing, Security, Unit Testing

This project was completed as a part of CS161 - Computer Security class with my project partner - Sanzhar Abatov. The entire code was writted from scratch in Go with over 3000 lines and was fully tested using custom unit tests. 

We have developed a file system similar to Google Docs, where users can store, edit, invite other users, accept invitations to collaborate and revoke file rights. The whole system is based on one insecure database and one small secure database only for public keys (Trusted Computer Base). The goal was to implement a fully secure system despite the two main adversaries that can edit or delete anything on the insecure database with the main objectives of keeping the file contents, file names (and their length) and user structs fully secure. There was also a requirement for the transaction's bandwith to not scale with number of users and files which was achieved through using linked-list like structure of saving files.

In order to achieve this, we have used RSA assymetric encryption in combination with symmetric keys (El Gamal scheme modification), cryptographic MACs, slow hashing schemes like Argon2Key, digital signatures and other cryptographical algorithms. For the system itself, we have used structs for each component placed on the database in the Marshalled form. 

