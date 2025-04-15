
=========================================
🏗️ Complex reStructuredText Documentation
=========================================

:author: Do Vo
:version: 2.3.1
:date: 2025-04-15

.. contents::
   :depth: 3
   :local:

Introduction
============

Welcome to the documentation for |project_name| version |version|.

This document demonstrates **advanced formatting** and powerful features of reStructuredText.

.. sidebar:: Author's Note

   This is a sidebar block. It can be used for author tips or side comments.

1. Overview Section
===================

1.1 Purpose
-----------

The goal of this document is to:

- Showcase complex `.rst` usage
- Use full formatting power
- Prepare for PDF/HTML generation via **Sphinx**

1.2 Key Features
----------------

.. note::
   This document uses inline substitution: |project_name| is a placeholder.

.. warning::
   Please do **not** copy and paste this into Word 😅.

2. Code and JSON Examples
=========================

2.1 Python Example
------------------

.. code-block:: python
   :linenos:

   from datetime import datetime

   def get_timestamp():
       """Returns current UTC timestamp"""
       return datetime.utcnow().isoformat()

2.2 JSON Example
----------------

.. code-block:: json
   :linenos:

   {
     "user": "do.vo",
     "role": "developer",
     "languages": ["TypeScript", "Node.js", "Python"]
   }

3. Tables Galore!
=================

3.1 Grid Table
--------------

+-----------------+------------+------------------------+
| Tên trường      | Kiểu dữ liệu | Mô tả                |
+=================+============+========================+
| user_id         | int        | ID người dùng         |
+-----------------+------------+------------------------+
| email           | string     | Email đăng ký         |
+-----------------+------------+------------------------+
| created_at      | datetime   | Ngày tạo tài khoản    |
+-----------------+------------+------------------------+

3.2 List Table (CSV-style)
--------------------------

.. list-table:: Các ngôn ngữ lập trình
   :widths: 20 40
   :header-rows: 1

   * - Tên
     - Ứng dụng
   * - Python
     - Automation, AI, Data
   * - TypeScript
     - Frontend, Backend (Node.js)
   * - Rust
     - High performance, system-level

4. Math and Formulas
====================

Inline: :math:`a^2 + b^2 = c^2`

Block:

.. math::

   F(x) = \int_{-\infty}^\infty
   f(t)\,e^{-2\pi i x t}\,dt

5. Cross-References
===================

Jump to :ref:`custom-reference`.

.. _custom-reference:

This is a section you can reference later. 🔁

6. Custom Roles & Substitution
==============================

.. role:: highlight

:highlight:`This text is highlighted using a custom role.`

Macros:

- Project: |project_name|
- Version: |version|

7. Embed Raw HTML
=================

.. raw:: html

   <div style="color:darkblue; font-weight:bold;">
     This is raw HTML inside RST!
   </div>

.. rubric:: ✅ Cảm ơn bạn đã đọc đến đây!

----

.. |project_name| replace:: **Advanced reST Doc**
.. |version| replace:: 2.3.1
