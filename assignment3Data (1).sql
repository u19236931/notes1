USE [Assignment3]
GO

BEGIN TRAN 

SET IDENTITY_INSERT [dbo].[Brands] ON 

INSERT [dbo].[Brands] ([BrandId], [Name], [Description], [DateCreated], [DateModified], [IsActive], [IsDeleted]) VALUES (1, N'Nike', N'Footwear manufacturing company.', CAST(N'2021-10-19T11:58:55.4270000' AS DateTime2), CAST(N'2021-10-29T14:49:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[Brands] ([BrandId], [Name], [Description], [DateCreated], [DateModified], [IsActive], [IsDeleted]) VALUES (2, N'Adidas', N'Design company.', CAST(N'2021-10-19T11:58:55.4287090' AS DateTime2), NULL, 1, 0)
INSERT [dbo].[Brands] ([BrandId], [Name], [Description], [DateCreated], [DateModified], [IsActive], [IsDeleted]) VALUES (3, N'Levi Strauss & Co.', N'Clothing company.', CAST(N'2021-10-19T11:58:55.4287187' AS DateTime2), NULL, 1, 0)

SET IDENTITY_INSERT [dbo].[Brands] OFF
GO


SET IDENTITY_INSERT [dbo].[ProductTypes] ON 

INSERT [dbo].[ProductTypes] ([ProductTypeId], [Name], [Description], [DateCreated], [DateModified], [IsActive], [IsDeleted]) VALUES (1, N'Footwear', N'Shoes, boots, or any other outer covering for the human foot.', CAST(N'2021-10-19T11:58:55.4287249' AS DateTime2), NULL, 1, 0)
INSERT [dbo].[ProductTypes] ([ProductTypeId], [Name], [Description], [DateCreated], [DateModified], [IsActive], [IsDeleted]) VALUES (2, N'Clothing', N'Clothes are the things that people wear, such as shirts , coats , trousers , and dresses.', CAST(N'2021-10-19T11:58:55.4287892' AS DateTime2), NULL, 1, 0)
INSERT [dbo].[ProductTypes] ([ProductTypeId], [Name], [Description], [DateCreated], [DateModified], [IsActive], [IsDeleted]) VALUES (3, N'Accessories', N'Hats, sunglasses, jewellery, bags, etc.', CAST(N'2021-10-19T11:58:55.4287921' AS DateTime2), NULL, 1, 0)

SET IDENTITY_INSERT [dbo].[ProductTypes] OFF
GO


SET IDENTITY_INSERT [dbo].[Products] ON 

INSERT [dbo].[Products] ([ProductId], [Name], [Description], [DateCreated], [DateModified], [IsActive], [IsDeleted], [Price], [ProductTypeId], [BrandId]) VALUES (1, N'Nike Big Kids'' Air Max Bolt Shoes', N'Big Air Awaits. Show some love to big Air. The Nike Air Max Bolt is all about the huge Air-Sole unit that’s hard to miss.', CAST(N'2021-10-19T11:58:55.4287989' AS DateTime2), NULL, 1, 0, CAST(1299.000 AS Decimal(18, 3)), 1, 1)
INSERT [dbo].[Products] ([ProductId], [Name], [Description], [DateCreated], [DateModified], [IsActive], [IsDeleted], [Price], [ProductTypeId], [BrandId]) VALUES (2, N'Nike Men''s Sportswear Hooded Woven Tracksuit', N'Classic Comfort From Top To Bottom. The Nike Sportswear Tracksuit combines lightweight durability with a breathable mesh lining for all - day comfort and total coverage.Blocks of colour add contrast for bold, street - ready style.', CAST(N'2021-10-19T11:58:55.4288702' AS DateTime2), NULL, 1, 0, CAST(1599.000 AS Decimal(18, 3)), 2, 1)
INSERT [dbo].[Products] ([ProductId], [Name], [Description], [DateCreated], [DateModified], [IsActive], [IsDeleted], [Price], [ProductTypeId], [BrandId]) VALUES (3, N'Adidas Adilette Shower Slides - Black', N'Slip on and go. These slides mix 3-Stripes style with a comfortable cloudfoam unitsole, which combines the midsole with the outsole for superior cushioning. Finished with a bold linear logo on the side.', CAST(N'2021-10-19T11:58:55.4288731' AS DateTime2), NULL, 1, 0, CAST(585.000 AS Decimal(18, 3)), 1, 2)
INSERT [dbo].[Products] ([ProductId], [Name], [Description], [DateCreated], [DateModified], [IsActive], [IsDeleted], [Price], [ProductTypeId], [BrandId]) VALUES (4, N'Ball Cap Boxing - White/Black', N'100 % cotton snap back, Adidas branded cap.', CAST(N'2021-10-19T11:58:55.4288745' AS DateTime2), NULL, 1, 0, CAST(332.000 AS Decimal(18, 3)), 3, 2)
INSERT [dbo].[Products] ([ProductId], [Name], [Description], [DateCreated], [DateModified], [IsActive], [IsDeleted], [Price], [ProductTypeId], [BrandId]) VALUES (5, N'Levis Wayfarer Polarized Sunglasses', N'Stylish Levi’s Wayfarer sunglasses with highly durable frames and UV (Polarized) lenses.', CAST(N'2021-10-19T11:58:55.4288759' AS DateTime2), NULL, 1, 0, CAST(699.000 AS Decimal(18, 3)), 3, 3)

SET IDENTITY_INSERT [dbo].[Products] OFF
GO



-- Create Dummy Data for the Reporting
DECLARE @cnt INT = 0;
DECLARE @cnt_total INT = 1000;

	While @cnt < @cnt_total
	BEGIN
	Declare @Brand int  = Cast(FLOOR(RAND()*(3-1+1)+1 ) AS INT)
	Declare @ProdType int  = Cast(FLOOR(RAND()*(3-1+1)+1 ) AS INT)
	insert into Products(Name, Description, DateCreated, DateModified, IsActive, IsDeleted, Price, ProductTypeId, BrandId) values
	(Concat('Product ', @cnt + 1), CONCAT('Description for Product ', @cnt + 1), GETDATE(),NULL,1, 0,CAST(RAND()*1500.00 AS decimal), @ProdType, @Brand)
	SET @cnt =  @cnt + 1;
	END

COMMIT TRAN