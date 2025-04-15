
==============================
📚 Why reStructuredText > Markdown
==============================

.. contents::
   :depth: 2
   :local:

1. Mục lục Tự Động (TOC)
=========================

Bạn không thể làm được điều này bằng Markdown thuần:

.. contents:: Table of Contents
   :depth: 3
   :backlinks: entry

2. Cross-reference Nội Bộ
==========================

Xem thêm phần :ref:`math-section` để hiểu cách viết công thức.

.. _math-section:

3. Hỗ Trợ Toán Học (Math Support)
=================================

Inline: :math:`e^{i\pi} + 1 = 0`

Block:

.. math::

   \nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_0}

   \nabla \cdot \vec{B} = 0

   \nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}

   \nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}

Markdown không hỗ trợ LaTeX thuần bên trong PDF/HTML nếu không cài thêm plugin như KaTeX.

4. Ghi chú và Cảnh Báo (Admonition)
====================================

.. note::
   Đây là một ghi chú quan trọng.

.. warning::
   Cẩn thận! Thao tác này có thể gây lỗi hệ thống.

.. tip::
   Bạn nên kiểm tra kết nối mạng trước khi tiếp tục.

5. Bảng Dữ Liệu Phức Tạp (Grid Table)
======================================

+------------+------------+------------------------+
| Họ tên     | Vai trò    | Ghi chú                |
+============+============+========================+
| Linh       | Developer  | Full-stack (TypeScript)|
+------------+------------+------------------------+
| Do         | Analyst    | Data-heavy workloads   |
+------------+------------+------------------------+

Markdown không tự wrap nội dung bảng, dễ bị vỡ layout nếu dài.

6. Macro Tái Sử Dụng (Substitution)
====================================

Dự án: |project|  
Phiên bản: |version|

Dòng này dùng macro tái sử dụng cực tiện.

----

.. |project| replace:: **Siêu Dự Án reST**
.. |version| replace:: `v9.5.2`
